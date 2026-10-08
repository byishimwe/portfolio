import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("native shared-element snapshots preserve matching media identities", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => {
    const native = document.startViewTransition.bind(document);
    const names = () =>
      [...document.querySelectorAll("*")]
        .map((element) => getComputedStyle(element).viewTransitionName)
        .filter((name) => name && name !== "none");
    document.startViewTransition = (update) => {
      const before = names();
      return native(async () => {
        await (typeof update === "function" ? update() : update?.update?.());
        document.documentElement.dataset.transitionSnapshots = JSON.stringify({
          before,
          after: names(),
        });
      });
    };
  });
  for (const slug of ["cafe-bliss", "imizi", "quad"]) {
    await page.goto(`/#project-${slug}`);
    await expect(page.locator(".stage")).toHaveAttribute("data-active", slug);
    await page
      .locator(`#project-${slug}`)
      .getByRole("link", { name: "Explore Project" })
      .click();
    await expect(page).toHaveURL(new RegExp(`/work/${slug}$`));
    await expect
      .poll(() =>
        page.locator("html").getAttribute("data-transition-snapshots"),
      )
      .not.toBeNull();
    const snapshots: { before: string[]; after: string[] } = JSON.parse(
      (await page.locator("html").getAttribute("data-transition-snapshots"))!,
    );
    for (const names of [snapshots.before, snapshots.after]) {
      expect(
        names.filter((name) => name === `project-${slug}-media`),
      ).toHaveLength(1);
      expect(new Set(names).size).toBe(names.length);
    }
  }
});

test("header sections, scroll restoration and modified project links remain functional", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const [label, id] of [
    ["Work", "work"],
    ["Services", "services"],
    ["About", "about"],
    ["Start a Project", "contact"],
  ]) {
    await page.goto("/work/cafe-bliss");
    await page
      .locator(".desktop-nav")
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect
      .poll(() =>
        page
          .locator(`#${id}`)
          .evaluate((element) =>
            Math.round(element.getBoundingClientRect().top),
          ),
      )
      .toBeGreaterThanOrEqual(60);
    await expect
      .poll(() =>
        page
          .locator(`#${id}`)
          .evaluate((element) =>
            Math.round(element.getBoundingClientRect().top),
          ),
      )
      .toBeLessThan(250);
  }
  await page.goto("/");
  await page
    .locator("#project-quad")
    .evaluate((element) =>
      element.scrollIntoView({ block: "start", behavior: "instant" }),
    );
  await expect(page.locator(".stage")).toHaveAttribute("data-active", "quad");
  const savedY = await page.evaluate(() => window.scrollY);
  await page
    .locator("#project-quad")
    .getByRole("link", { name: "Explore Project" })
    .click();
  await expect(page).toHaveURL(/\/work\/quad$/);
  await page.goBack();
  await expect(page.locator("h1")).toContainText("Digital experiences");
  await expect
    .poll(() => page.evaluate((y) => Math.abs(window.scrollY - y), savedY))
    .toBeLessThan(3);
  await page.goto("/#project-cafe-bliss");
  // Observe cancellation after React's root listener. Block only the browser's
  // new-tab default action, which headless Chrome does not expose as a popup.
  await page.evaluate(() =>
    document.addEventListener(
      "click",
      (event) => {
        document.documentElement.dataset.modifiedClickIntercepted = String(
          event.defaultPrevented,
        );
        event.preventDefault();
      },
      { once: true },
    ),
  );
  await page
    .locator("#project-cafe-bliss")
    .getByRole("link", { name: "Explore Project" })
    .click({ modifiers: ["Control"] });
  await expect(page.locator("html")).toHaveAttribute(
    "data-modified-click-intercepted",
    "false",
  );
  await expect(page).toHaveURL(/#project-cafe-bliss$/);
});

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

test("SPA deep links, client metadata, images and accessibility", async ({
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
    expect(html).toContain('id="root"');
    expect(html).toContain("Prince Arnaud Ishimwe");
    // SPA HTML has homepage defaults; project metadata is applied by React.
    expect(html).not.toContain('class="case-study');
    expect(html).toContain('property="og:image"');
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page).toHaveTitle(new RegExp(title));
    await expect(
      page.locator('head meta[property="og:image"]'),
    ).toHaveAttribute(
      "content",
      `/social-${route === "/" ? "home" : route.split("/").pop()}.webp`,
    );
    await expect(page.locator("head title")).toHaveCount(1);
    await expect(page.locator('head meta[name="description"]')).toHaveCount(1);
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
    expect((await request.get(route)).status()).toBe(200); // Static SPA fallback: soft 404.
    await page.goto(route);
    await expect(
      page.getByRole("heading", { name: "Outside the frame." }),
    ).toBeVisible();
    await expect(page.locator('head meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex",
    );
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

test("no-JavaScript fallback explains SPA requirement and retains contact", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Enable JavaScript to explore.");
  await expect(
    page.getByRole("link", { name: "Send an Email" }),
  ).toHaveAttribute("href", "mailto:princeishimwe754@gmail.com");
  await context.close();
});
