import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { projects } from "../../src/content/projects";
import { assets, socialImage } from "../../src/config/assets";
const routes = ["/", ...projects.map((project) => `/work/${project.slug}`)];
test("editorial menu works at desktop and mobile sizes from every route", async ({
  page,
}) => {
  test.setTimeout(90_000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      for (const label of ["Work", "Services", "About", "Contact"]) {
        await page.goto(route);
        const trigger = page.getByRole("button", { name: "Open menu" });
        await trigger.click();
        const nav = page.getByRole("navigation", {
          name: "Primary navigation",
        });
        await expect(nav.getByRole("link")).toHaveCount(4);
        await nav.getByRole("link", { name: label, exact: true }).click();
        await expect(page).toHaveURL(new RegExp(`#${label.toLowerCase()}$`));
        await expect(trigger).toHaveAttribute("aria-expanded", "false");
      }
    }
    const menu = page.locator(".menu-button");
    await menu.focus();
    await page.keyboard.press("Enter");
    await page.keyboard.press("Tab");
    await expect(page.locator(".mobile-nav a").first()).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await menu.click();
    await page.mouse.click(5, 100);
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator(".mobile-nav")).toBeHidden();
    await expect(page.locator(".header-contact")).toHaveAttribute(
      "href",
      "/#contact",
    );
    if (width === 1440) {
      await page.locator(".header-contact").click();
      await expect(page).toHaveURL(/#contact$/);
    } else await expect(page.locator(".header-contact")).toBeHidden();
  }
});
test("minimal structure, accurate case copy and external actions", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" });
  await page.goto("/");
  expect(await page.locator(".homepage > section").count()).toBe(5);
  await expect(page.locator(".project-row")).toHaveCount(3);
  await expect(page.locator(".service")).toHaveCount(3);
  await expect(page.locator("#about [data-asset]")).toHaveCount(1);
  await expect(
    page.locator("#contact [data-asset], #contact img, #about a"),
  ).toHaveCount(0);
  expect(
    await page.locator(".living-frame, .stage, .pin-spacer, iframe").count(),
  ).toBe(0);
  const colors = await page
    .locator("h1 .hero-line")
    .evaluateAll((elements) =>
      elements.map((element) => getComputedStyle(element).color),
    );
  expect(new Set(colors).size).toBe(1);
  for (const project of projects) {
    expect((await request.get(`/work/${project.slug}`)).status()).toBe(200);
    await page.goto(`/work/${project.slug}`);
    await expect(page.locator("h1")).toHaveText(project.title);
    await page.reload();
    await expect(page.locator(".case-image")).toHaveCount(1);
    await expect(page.locator(".case-study [data-asset]")).toHaveCount(1);
    await expect(page.locator(".case-row")).toHaveCount(5);
    await expect(page.locator(".case-row").nth(3).locator("dd")).toHaveText(
      project.rows[3],
    );
    await expect(page.locator(".case-metadata dt")).toHaveText([
      "Role",
      "Year",
      "Type",
    ]);
    await expect(page.locator(".case-actions a").first()).toHaveAttribute(
      "href",
      project.liveUrl,
    );
    await expect(page.locator(".case-actions a").last()).toHaveAttribute(
      "href",
      project.repositoryUrl,
    );
    expect(
      await page
        .locator(".case-image")
        .evaluate(
          (element) =>
            !!(
              element.compareDocumentPosition(
                document.querySelector(".case-actions")!,
              ) & Node.DOCUMENT_POSITION_FOLLOWING
            ),
        ),
    ).toBe(true);
    await expect(page.locator("head title")).toHaveCount(1);
    await expect(page).toHaveTitle(new RegExp(project.title));
    await expect(page.locator('head meta[name="description"]')).toHaveAttribute(
      "content",
      project.summary,
    );
    await expect(page.locator('head meta[property="og:image"]')).toHaveCount(
      socialImage ? 1 : 0,
    );
  }
  for (const route of ["/work/unknown", "/about", "/missing"]) {
    await page.goto(route);
    await expect(page.locator("h1")).toHaveText("Page not found.");
    await expect(page.locator('head meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex",
    );
  }
  expect(errors).toEqual([]);
});
test("real sequence, route focus, anchors, browser Back and scroll restoration", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.locator("#project-cafe-bliss").click();
  await expect(page.locator("h1")).toBeFocused();
  await expect(page.locator(".project-pagination a").first()).toHaveAttribute(
    "href",
    "/#work",
  );
  await page
    .getByRole("link", { name: "Next Project IMIZI Training Club" })
    .click();
  await expect(page).toHaveURL(/\/work\/imizi$/);
  await expect(page.locator("h1")).toBeFocused();
  await page.getByRole("link", { name: "Next Project Quad" }).click();
  await expect(page).toHaveURL(/\/work\/quad$/);
  await expect(page.locator(".project-pagination a").last()).toHaveAttribute(
    "href",
    "/#work",
  );
  await page
    .getByRole("link", { name: "Previous Project IMIZI Training Club" })
    .click();
  await expect(page).toHaveURL(/\/work\/imizi$/);
  for (const [label, id] of [
    ["Work", "work"],
    ["Services", "services"],
    ["About", "about"],
    ["Contact", "contact"],
  ]) {
    await page.goto("/work/cafe-bliss");
    await page.locator(".menu-button").click();
    await page
      .locator(".mobile-nav")
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    const top = await page
      .locator(`#${id}`)
      .evaluate((element) => element.getBoundingClientRect().top);
    expect(top).toBeGreaterThanOrEqual(80);
    expect(top).toBeLessThan(900);
  }
  await page.goto("/");
  await page
    .locator("#project-quad")
    .evaluate((element) =>
      element.scrollIntoView({ block: "start", behavior: "instant" }),
    );
  const y = await page.evaluate(() => scrollY);
  await page.locator("#project-quad").click();
  await expect(page).toHaveURL(/\/work\/quad$/);
  await page.goBack();
  await expect(page.locator("#hero-title")).toBeVisible();
  await expect
    .poll(() => page.evaluate((saved) => Math.abs(scrollY - saved), y))
    .toBeLessThan(3);
  await page.goto("/work/cafe-bliss");
  await page.locator(".back-link").click();
  await expect(page).toHaveURL(/#project-cafe-bliss$/);
});
test("system theme, pre-paint saved preference, persistence and unavailable storage", async ({
  browser,
}) => {
  const context = await browser.newContext({ colorScheme: "dark" });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("button", { name: "Switch to light theme" }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.goto("/work/quad");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.addInitScript(() => {
    document.addEventListener("DOMContentLoaded", () => {
      document.documentElement.dataset.initialTheme =
        document.documentElement.dataset.theme;
    });
  });
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute(
    "data-initial-theme",
    "light",
  );
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.evaluate(() => localStorage.removeItem("portfolio-theme"));
  await page.emulateMedia({ colorScheme: "light" });
  await page.emulateMedia({ colorScheme: "dark" });
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await context.close();
  const blocked = await browser.newContext({ colorScheme: "dark" });
  await blocked.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage disabled");
      },
    });
  });
  const blockedPage = await blocked.newPage();
  await blockedPage.goto("/");
  await expect(blockedPage.locator("html")).toHaveAttribute(
    "data-theme",
    "dark",
  );
  await blockedPage
    .getByRole("button", { name: "Switch to light theme" })
    .click();
  await expect(blockedPage.locator("html")).toHaveAttribute(
    "data-theme",
    "light",
  );
  await blocked.close();
});
test("responsive composition in both themes and rendered screenshots", async ({
  page,
}) => {
  // This test visits 72 pages and captures 16 full-page screenshots.
  test.setTimeout(90_000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const theme of ["light", "dark"] as const) {
    for (const viewport of [
      { width: 1440, height: 900 },
      { width: 1366, height: 768 },
      { width: 1280, height: 720 },
      { width: 1024, height: 768 },
      { width: 768, height: 1024 },
      { width: 430, height: 932 },
      { width: 390, height: 844 },
      { width: 375, height: 812 },
      { width: 320, height: 700 },
    ]) {
      await page.setViewportSize(viewport);
      await page.emulateMedia({ colorScheme: theme });
      for (const route of routes) {
        await page.goto(route);
        await expect(page.locator("h1")).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
        ).toBe(true);
        if (route === "/") {
          if (viewport.width > 800) {
            const frame = await page.locator(".hero-visual").boundingBox();
            expect(frame!.y + frame!.height).toBeLessThan(viewport.height);
          }
          const portrait = await page.locator(".portrait").boundingBox();
          expect(portrait!.height).toBeLessThanOrEqual(370);
          const selection = await page.locator("h1").evaluate((el) => {
            const style = getComputedStyle(el, "::selection");
            return [style.backgroundColor, style.color];
          });
          expect(selection[0]).not.toBe(selection[1]);
          const lines = await page
            .locator(".hero-line")
            .evaluateAll((elements) =>
              elements.map((element) => ({
                height: element.getBoundingClientRect().height,
                line: parseFloat(getComputedStyle(element).lineHeight),
              })),
            );
          for (const line of lines)
            expect(line.height).toBeLessThan(line.line * 1.1);
          const colors = await page
            .locator(".hero-line")
            .evaluateAll((elements) =>
              elements.map((element) => getComputedStyle(element).color),
            );
          expect(new Set(colors).size).toBe(1);
        }
        if ([1440, 390].includes(viewport.width))
          await page.screenshot({
            path: `tmp/redesign-qa/${theme}-${viewport.width}-${route === "/" ? "home" : route.split("/").pop()}.png`,
            fullPage: true,
          });
      }
    }
  }
});
test("keyboard mobile menu, modified links and confirmed contacts", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.locator(".menu-button");
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(page.locator(".mobile-nav a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .locator(".mobile-nav")
    .getByRole("link", { name: "About" })
    .click();
  await expect(page).toHaveURL(/#about$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(
    page.getByRole("link", { name: "Start a Project" }),
  ).toHaveAttribute("href", /wa\.me\/250795198946/);
  await expect(
    page.getByRole("link", { name: "or send an email" }),
  ).toHaveAttribute("href", /^mailto:princeishimwe754@gmail\.com/);
  await page.goto("/");
  await page.evaluate(() =>
    document.addEventListener(
      "click",
      (event) => {
        document.documentElement.dataset.modifiedIntercepted = String(
          event.defaultPrevented,
        );
        event.preventDefault();
      },
      { once: true },
    ),
  );
  await page.locator("#project-cafe-bliss").click({ modifiers: ["Control"] });
  await expect(page.locator("html")).toHaveAttribute(
    "data-modified-intercepted",
    "false",
  );
  await expect(page).toHaveURL(/\/$/);
});
test("quiet motion is visible, settles, cleans up, and respects reduced motion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.addInitScript(() => {
    const states: string[] = [];
    const sample = () => {
      for (const selector of [".hero-line", ".service", ".case-intro"]) {
        const element = document.querySelector(selector);
        if (element && +getComputedStyle(element).opacity < 0.98)
          states.push(selector);
      }
      document.documentElement.dataset.motionSamples = JSON.stringify([
        ...new Set(states),
      ]);
      requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  });
  await page.goto("/");
  await expect
    .poll(() => page.locator("html").getAttribute("data-motion-samples"))
    .toContain(".hero-line");
  await expect(page.locator(".hero-line").last()).toHaveCSS("opacity", "1");
  await expect(page.locator(".hero-visual")).toHaveCSS("transform", "none");
  await page
    .locator(".service-grid")
    .evaluate((element) =>
      element.scrollIntoView({ behavior: "instant", block: "center" }),
    );
  await expect
    .poll(() => page.locator("html").getAttribute("data-motion-samples"))
    .toContain(".service");
  await expect(page.locator(".service").last()).toHaveCSS("opacity", "1");
  await page.locator("#project-cafe-bliss").click();
  await expect
    .poll(() => page.locator("html").getAttribute("data-motion-samples"))
    .toContain(".case-intro");
  await expect(page.locator(".case-image")).toHaveCSS("transform", "none");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".hero-line").first()).toHaveCSS(
    "transform",
    "none",
  );
  await expect(page.locator(".hero-line").first()).toHaveCSS("opacity", "1");
  await page.locator("#project-quad").click();
  await expect(page.locator("h1")).toBeFocused();
  await expect(page.locator(".case-intro")).toHaveCSS("transform", "none");
});
test("accessible themes, truthful placeholders and no missing media requests", async ({
  page,
}) => {
  const failures: string[] = [];
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(response.url());
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const theme of ["light", "dark"] as const)
    for (const route of routes) {
      await page.emulateMedia({ colorScheme: theme });
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      const expectedImages =
        route === "/"
          ? Object.values(assets).filter((asset) => asset.src).length
          : Number(
              Boolean(
                assets[
                  projects.find((project) => route.endsWith(project.slug))!.slug
                ].src,
              ),
            );
      await expect(page.locator("img")).toHaveCount(expectedImages);
      for (const image of await page.locator("img").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            image.evaluate(
              (element) => (element as HTMLImageElement).naturalWidth,
            ),
          )
          .toBeGreaterThan(0);
      }
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    }
  expect(failures).toEqual([]);
});
test("no-JavaScript fallback remains honest and retains email", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Enable JavaScript to explore.");
  await expect(
    page.getByRole("link", { name: "Send an Email" }),
  ).toHaveAttribute("href", "mailto:princeishimwe754@gmail.com");
  await context.close();
});
