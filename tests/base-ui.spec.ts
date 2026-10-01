import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Given a selected diagram view, keyboard traversal changes focus, not selection.
// Activating another choice selects it; activating it again keeps a required choice.
test("diagram groups support arrow navigation and never lose selection", async ({ page }) => {
  await page.goto("/");
  const explorer = page.getByRole("group", { name: "Code to examine" });
  const validation = explorer.getByRole("button", { name: "Form 6 checks", exact: true });
  const permissions = explorer.getByRole("button", { name: "Officer permissions", exact: true });
  await expect(validation).toBeEnabled();
  await validation.focus();
  await page.keyboard.press("ArrowRight");
  await expect(permissions).toBeFocused();
  await expect(validation).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("Space");
  await expect(permissions).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("Space");
  await expect(permissions).toHaveAttribute("aria-pressed", "true");
  await expect(explorer.locator('[aria-pressed="true"]')).toHaveCount(1);

  const perspectives = page.getByRole("group", { name: "Diagram perspective" });
  const authority = perspectives.getByRole("button", { name: "Statutory authority" });
  const software = perspectives.getByRole("button", { name: "Software implementation" });
  await authority.focus();
  await page.keyboard.press("ArrowRight");
  await expect(software).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(software).toHaveAttribute("aria-pressed", "true");
  await page.keyboard.press("Enter");
  await expect(software).toHaveAttribute("aria-pressed", "true");
  await expect(perspectives.locator('[aria-pressed="true"]')).toHaveCount(1);
});

// Given the publication requirements, only the chosen disclosure opens.
// The methodology is an independent keyboard-operable disclosure.
test("publication accordion and methodology use accessible disclosure controls", async ({
  page,
}) => {
  await page.goto("/");
  const requirements = page.getByRole("group", { name: "Publication requirements" });
  const source = requirements.getByRole("button", { name: "01 Source code" });
  const builds = requirements.getByRole("button", { name: "05 Reproducible builds" });
  await expect(source).toHaveAttribute("aria-expanded", "true");
  await expect(builds).toBeEnabled();
  await builds.focus();
  await page.keyboard.press("Enter");
  await expect(builds).toHaveAttribute("aria-expanded", "true");
  await expect(source).toHaveAttribute("aria-expanded", "false");
  await expect(requirements.getByRole("region", { name: "05 Reproducible builds" })).toContainText(
    "Deployment attestations are still needed",
  );
  await expect(requirements.locator('button[aria-expanded="true"]')).toHaveCount(1);
  await page.keyboard.press("Space");
  await expect(builds).toHaveAttribute("aria-expanded", "false");

  const methodology = page.getByRole("button", { name: "The evidence behind this demand" });
  await expect(methodology).toHaveAttribute("aria-expanded", "false");
  await expect(methodology).toBeEnabled();
  await methodology.focus();
  await page.keyboard.press("Space");
  await expect(methodology).toHaveAttribute("aria-expanded", "true");
  await expect(
    page.getByText("ECI statements are attributed, not treated as independent proof", {
      exact: false,
    }),
  ).toBeVisible();
  await page.keyboard.press("Space");
  await expect(methodology).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("details, summary, noscript")).toHaveCount(0);
});

test("reading progress has an accessible value that follows scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const progress = page.getByRole("progressbar", { name: "Reading progress" });
  await expect(page.getByRole("button", { name: "Copy the demand" })).toBeEnabled();
  await expect(progress).toHaveAttribute("aria-valuenow", "0");
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(progress).toHaveAttribute("aria-valuenow", "100");
  await expect(progress).toHaveAttribute("aria-valuetext", "100% read");
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(progress).toHaveAttribute("aria-valuenow", "0");
});

test("button-styled links retain native navigation and Space scrolling", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Copy the demand" })).toBeEnabled();
  const primary = page
    .getByRole("link", { name: "Read the demand", exact: true })
    .filter({ has: page.locator("span") });
  await primary.focus();
  await page.keyboard.press("Space");
  await expect(page).not.toHaveURL(/#checklist$/);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#checklist$/);
  await expect(page.locator("#checklist-title")).toBeInViewport();
  await expect(
    page.getByRole("link", { name: "Estonia’s IVXV source code", exact: false }),
  ).toHaveAttribute("target", "_blank");
  await expect(
    page.getByRole("link", { name: "Swiss Post’s e-voting source code", exact: false }),
  ).toHaveAttribute("rel", "noopener noreferrer");
});

test("clipboard failures show one error notification without downloading a fallback", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  const downloads: string[] = [];
  page.on("download", (download) => downloads.push(download.suggestedFilename()));
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Copy the demand" })).toBeEnabled();
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: () => Promise.reject(new Error("Permission denied")),
    });
  });
  await page.getByRole("button", { name: "Copy the demand" }).click();
  const feedback = page.getByRole("region", { name: "Copy feedback" });
  await expect(feedback).toContainText("Could not copy the demand");
  await expect(feedback.getByRole("dialog", { name: "Copy status" })).toHaveCount(1);
  expect(downloads).toEqual([]);
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
  });
  await page.getByRole("button", { name: "Copy the demand" }).click();
  await expect(feedback).toContainText("Could not copy the demand");
  await expect(feedback.getByRole("dialog", { name: "Copy status" })).toHaveCount(1);
  expect(downloads).toEqual([]);
});

test("mobile chapter navigation can scroll by keyboard without page overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Copy the demand" })).toBeEnabled();
  const navigation = page.getByRole("navigation", { name: "Explore the story" });
  const viewport = navigation.getByRole("region", { name: "Chapter navigation" });
  await viewport.scrollIntoViewIfNeeded();
  await viewport.focus();
  await page.keyboard.press("ArrowRight");
  await expect.poll(() => viewport.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0);
  const demand = navigation.getByRole("link", { name: "06 Our demand" });
  await demand.focus();
  await expect(demand).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#checklist$/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test("expanded methodology stays above the footer", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "The evidence behind this demand" });
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect
    .poll(() =>
      page.evaluate(() => {
        const disclosure = document.querySelector(".methodology")!;
        const footer = document.querySelector(".site-footer")!;
        return footer.getBoundingClientRect().top - disclosure.getBoundingClientRect().bottom;
      }),
    )
    .toBeGreaterThanOrEqual(0);
});

test("motion preference changes preserve the reader's explicit pause choice", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const motion = page.locator("#motion-toggle");
  await expect(motion).toBeEnabled();
  await motion.click();
  await expect(motion).toHaveAttribute("aria-pressed", "true");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(motion).toBeDisabled();
  await expect(page.locator("html")).toHaveClass(/motion-paused/);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(motion).toBeEnabled();
  await expect(motion).toHaveAttribute("aria-label", "Play diagram animation");
  await motion.click();
  await expect(motion).toHaveAttribute("aria-pressed", "false");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(motion).toBeDisabled();
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(motion).toBeEnabled();
  await expect(motion).toHaveAttribute("aria-pressed", "false");
});

for (const width of [1440, 390]) {
  test(`${width}px: enhanced disclosure and feedback states stay accessible`, async ({
    page,
    context,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    await page.goto("/");
    await page.getByRole("button", { name: "05 Reproducible builds" }).click();
    await page.getByRole("button", { name: "The evidence behind this demand" }).click();
    await page.evaluate(() => {
      Object.defineProperty(navigator.clipboard, "writeText", {
        value: () => Promise.reject(new Error("Permission denied")),
      });
    });
    await page.getByRole("button", { name: "Copy the demand" }).click();
    await expect(page.getByRole("region", { name: "Copy feedback" })).toContainText(
      "Could not copy the demand",
    );
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page
      .locator("#checklist")
      .screenshot({ path: `.impeccable/review/base-ui-checklist-${width}.png` });
    await page
      .locator(".methodology")
      .screenshot({ path: `.impeccable/review/base-ui-methodology-${width}.png` });
  });
}
