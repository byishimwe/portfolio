import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("project transitions, browser history, fallback routing and failed media", async ({
  page,
  browser,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (/duplicate view-transition|hydration/i.test(message.text()))
      errors.push(message.text());
  });
  for (const slug of ["cafe-bliss", "imizi", "quad"]) {
    await page.goto(`/#project-${slug}`);
    await expect(page.locator(".stage"))
      .toHaveAttribute("data-active", slug)
      .catch(async (error) => {
        await test.info().attach("anchor-geometry", {
          body: JSON.stringify(
            await page.evaluate(() => ({
              y: window.scrollY,
              hash: window.location.hash,
              chapters: [...document.querySelectorAll(".project-chapter")].map(
                (element) => ({
                  id: element.id,
                  top: element.getBoundingClientRect().top,
                  height: element.getBoundingClientRect().height,
                }),
              ),
            })),
          ),
          contentType: "application/json",
        });
        throw error;
      });
    await page
      .locator(`#project-${slug}`)
      .getByRole("link", { name: "Explore Project" })
      .click();
    await expect(page).toHaveURL(new RegExp(`/work/${slug}$`));
    await expect(page.locator("h1")).toBeFocused();
    await page.reload();
    await expect(page.locator(".case-hero img")).toBeVisible();
    await page.goBack();
    await expect(page.locator(".stage")).toHaveAttribute("data-active", slug);
  }
  await page.goto("/work/cafe-bliss");
  await page.getByRole("link", { name: /Next project/ }).click();
  await expect(page).toHaveURL(/\/work\/imizi$/);
  await page.addInitScript(() => {
    Object.defineProperty(document, "startViewTransition", {
      value: undefined,
      configurable: true,
    });
  });
  await page.goto("/#project-quad");
  await page
    .locator("#project-quad")
    .getByRole("link", { name: "Explore Project" })
    .click();
  await expect(page.locator("h1")).toHaveText("Quad");
  const failureContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const failurePage = await failureContext.newPage();
  await failurePage.route("**/cafe-desktop.webp", (route) => route.abort());
  await failurePage.goto("/#project-cafe-bliss");
  await expect(failurePage.locator(".stage .media-fallback")).toBeVisible();
  await failurePage
    .locator("#project-cafe-bliss")
    .getByRole("link", { name: "Explore Project" })
    .click();
  await expect(failurePage.locator(".case-hero .media-fallback")).toBeVisible();
  await failureContext.close();
  expect(errors).toEqual([]);
});

test("prerendered routes, metadata, images and accessibility", async ({
  page,
  request,
}) => {
  for (const [route, title] of [
    ["/", "Prince Arnaud Ishimwe"],
    ["/work/cafe-bliss", "Café Bliss"],
    ["/work/imizi", "IMIZI Training Club"],
    ["/work/quad", "Quad"],
  ]) {
    const response = await request.get(route);
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toContain(title);
    expect(html).toContain(`<title>${title}`);
    expect(html).toContain(
      `content="/social-${route === "/" ? "home" : route.split("/").pop()}.webp"`,
    );
    expect(html).toContain('property="og:image"');
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page).toHaveTitle(new RegExp(title));
    for (const image of await page.locator("img").all()) {
      const src = await image.getAttribute("src");
      expect((await request.get(src!)).status()).toBe(200);
      if (await image.isVisible()) {
        await image.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            image.evaluate(
              (element) => (element as HTMLImageElement).naturalWidth,
            ),
          )
          .toBeGreaterThan(0);
      }
    }
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    await page.screenshot({
      path: `tmp/qa/${route === "/" ? "home" : route.split("/").pop()}-review.png`,
      fullPage: true,
    });
  }
  for (const route of ["/missing-page", "/work/unknown-project"]) {
    expect((await request.get(route)).status()).toBe(404);
    await page.goto(route);
    await expect(
      page.getByRole("heading", { name: "Outside the frame." }),
    ).toBeVisible();
  }
});

test("desktop sticky gallery follows scroll and survives rapid changes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator(".living-frame")).toHaveClass(/enhanced/);
  for (const slug of ["cafe-bliss", "imizi", "quad", "cafe-bliss", "quad"]) {
    await page
      .locator(`#project-${slug}`)
      .evaluate((element) =>
        element.scrollIntoView({ block: "start", behavior: "instant" }),
      );
    await expect(page.locator(".stage")).toHaveAttribute("data-active", slug);
  }
  await page
    .locator("#project-imizi")
    .getByRole("link", { name: "Explore Project" })
    .click();
  await expect(page).toHaveURL(/\/work\/imizi$/);
  await expect(page.locator("h1")).toHaveText("IMIZI Training Club");
  await page
    .getByRole("link", { name: "Back to Selected Work", exact: false })
    .first()
    .click();
  await expect(page).toHaveURL(/#project-imizi$/);
  await expect(page.locator(".stage")).toHaveAttribute("data-active", "imizi");
  expect(errors).toEqual([]);
});

test("responsive layouts, menu, contact links and reduced motion", async ({
  page,
}) => {
  for (const viewport of [
    { width: 320, height: 700 },
    { width: 375, height: 812 },
    { width: 390, height: 844 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1280, height: 720 },
    { width: 1366, height: 768 },
    { width: 1440, height: 650 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const enhanced = viewport.width >= 1100 && viewport.height >= 700;
    if (!enhanced)
      await expect(page.locator(".chapter-media").first()).toBeVisible();
    for (const slug of ["cafe-bliss", "imizi", "quad"]) {
      await page.goto(`/work/${slug}`);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator(".menu-button");
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await expect(
    page.getByRole("link", { name: "Start a Project", exact: true }),
  ).toHaveAttribute("href", /wa\.me\/250795198946/);
  await expect(
    page.getByRole("link", { name: "Send an Email" }),
  ).toHaveAttribute("href", /^mailto:princeishimwe754@gmail\.com/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page
    .locator("#project-quad")
    .getByRole("link", { name: "Explore Project" })
    .click();
  await expect(page.locator("h1")).toHaveText("Quad");
});

test("content and route navigation work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator(".chapter-media").first()).toBeVisible();
  await page
    .locator("#project-cafe-bliss")
    .getByRole("link", { name: "Explore Project" })
    .click();
  await expect(page.locator("h1")).toHaveText("Café Bliss");
  await context.close();
});
