import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const viewport of [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
]) {
  test(`${viewport.name}: visual capture, accessibility and responsive layout`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize(viewport);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toContainText("Make source code");
    await expect(page.locator("h1")).toContainText("of ECINet/ERONet");
    await expect(page.locator("h1")).toContainText("public.");
    expect(
      await page
        .locator("h1")
        .evaluate((el) => el.scrollWidth <= el.clientWidth),
    ).toBe(true);
    await expect(page.locator(".hero-deck")).toContainText(
      "We demand that ECI open-source every part",
    );
    await expect(page.locator(".primary-link")).toHaveAttribute(
      "href",
      "#checklist",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `.impeccable/review/${viewport.name}.png`,
      fullPage: true,
      animations: "disabled",
    });
    await page.screenshot({
      path: `.impeccable/review/${viewport.name}-hero.png`,
      animations: "disabled",
    });
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("workflow and authority diagrams are functional", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Officer permissions", exact: true })
    .click();
  await expect(page.locator("#workflow-detail")).toContainText(
    "Commissioners questioned centralised access",
  );
  await expect(
    page.getByRole("button", { name: "Officer permissions", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(
    page.getByRole("button", { name: "Form 6 checks", exact: true }),
  ).toHaveAttribute("aria-pressed", "false");
  await page.getByRole("button", { name: "Build inputs", exact: true }).click();
  await expect(page.locator("#workflow-detail")).toContainText("Our demand:");
  await expect(page.locator("#workflow-detail a")).toHaveCount(0);
  await page
    .getByRole("button", { name: "Software implementation", exact: true })
    .click();
  await expect(page.locator("#implementation-title")).toContainText(
    "permissions, rules and overrides",
  );
  await page
    .getByRole("button", { name: "Statutory authority", exact: true })
    .click();
  await expect(page.locator("#implementation-title")).toContainText(
    "Powers remain",
  );
  await page.getByRole("button", { name: "Pause diagram animation" }).click();
  await expect(page.locator("html")).toHaveClass(/motion-paused/);
  await page.getByRole("button", { name: "Play diagram animation" }).click();
  await expect(page.locator("html")).not.toHaveClass(/motion-paused/);
});

test("checklist, clipboard and download fallback work", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page
    .locator("summary")
    .filter({ hasText: "Reproducible builds" })
    .click();
  await expect(
    page.getByText("Deployment attestations are still needed", {
      exact: false,
    }),
  ).toBeVisible();
  await expect(page.locator(".checklist-items details[open]")).toHaveCount(1);
  await page.getByRole("button", { name: "Copy the demand" }).click();
  await expect(page.getByRole("status")).toContainText("Demand copied");
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toContain("our demand to the ECI");
  expect(copied).toContain(
    "current components, future modules and every update",
  );
  expect(copied).toContain("standing open-source publication policy");
  expect(copied).toContain("not the boundary of this demand");
  expect(copied).toContain("Reproducible builds");
  expect(copied).toContain("Protect personal data");
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", {
      value: () => Promise.reject(new Error("Permission denied")),
    });
  });
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Copy the demand" }).click();
  expect((await downloadPromise).suggestedFilename()).toBe(
    "openelections-open-code-demand.txt",
  );
  await expect(page.getByRole("status")).toContainText("downloaded instead");
});

test("keyboard, reduced motion and local citations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await expect(page.locator("#motion-toggle")).toBeDisabled();
  expect(
    await page
      .locator(".network-flow")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  const missing = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .map((link) => link.getAttribute("href")!)
        .filter(
          (hash) => hash !== "#" && !document.getElementById(hash.slice(1)),
        ),
    );
  expect(missing).toEqual([]);
  await page.getByRole("link", { name: "The sources", exact: true }).click();
  await expect(page).toHaveURL(/#sources$/);
  await expect(page.locator("#sources-title")).toBeInViewport();
  await page.setViewportSize({ width: 320, height: 700 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
});

test("source links to the public repo and social metadata has a valid OG image", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const sourceLink = page.getByRole("link", {
    name: "Source on GitHub",
    exact: false,
  });
  await expect(sourceLink).toHaveAttribute(
    "href",
    "https://github.com/akshatagarwl/openelections",
  );
  await expect(sourceLink).toHaveAttribute("rel", "noopener noreferrer");
  await expect(page.locator("a[href$='.zip']")).toHaveCount(0);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
    "content",
    "Make source code of ECINet/ERONet public — OpenElections.in",
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    "https://openelections.in/og.png",
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    "content",
    "https://openelections.in/og.png",
  );
  const response = await request.get("/og.png");
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("image/png");
  const png = await response.body();
  expect(png.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a");
  expect(png.readUInt32BE(16)).toBe(1200);
  expect(png.readUInt32BE(20)).toBe(630);
});

test("the demand is explicit, scoped, and reachable from the main action", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator(".primary-link").click();
  await expect(page).toHaveURL(/#checklist$/);
  await expect(page.locator("#checklist-title")).toBeInViewport();
  await expect(page.locator("#checklist-title")).toContainText(
    "What should ECI publish?",
  );
  await expect(page.locator(".checklist-caption")).toContainText(
    "not voter data",
  );
  await expect(page.locator(".checklist-caption")).toContainText(
    "run, modify and share",
  );
  await expect(page.locator(".hero-deck")).toContainText(
    "future modules and every update",
  );
  await expect(page.locator(".section-heading").first()).toContainText(
    "examples—not the boundary",
  );
  await expect(page.locator(".checklist-intro")).toContainText(
    "standing publication policy",
  );
  await expect(page.locator(".checklist-caption")).toContainText(
    "before deployment",
  );
  await expect(page.locator(".checklist-items details").first()).toContainText(
    "Publication must not depend on a complaint or controversy",
  );
  await expect(
    page.getByRole("link", { name: "01 Why openness matters" }),
  ).toBeVisible();
  await expect(page.locator(".concern-row")).toHaveCount(3);
  await expect(page.locator(".concern-row a[href='#source-8']")).toHaveCount(3);
  await expect(page.locator("#source-7")).toContainText("EDITORIAL OPINION");
});

test("international precedents link source and verification materials", async ({
  page,
}) => {
  await page.goto("/");
  const precedents = page.locator("#precedents");
  await expect(
    precedents.getByRole("link", {
      name: "Estonia’s IVXV source code",
      exact: false,
    }),
  ).toHaveAttribute("href", "https://github.com/valimised/ivxv");
  await expect(
    precedents.getByRole("link", {
      name: "Swiss Post’s e-voting source code",
      exact: false,
    }),
  ).toHaveAttribute(
    "href",
    "https://gitlab.com/swisspost-evoting/e-voting/e-voting",
  );
  await expect(precedents.locator("blockquote")).toContainText(
    "the code that can be found here is the code that is used for election.",
  );
  const artifacts = precedents.locator(".artifact-links a");
  await expect(artifacts).toHaveCount(8);
  const documentation =
    "https://gitlab.com/swisspost-evoting/e-voting/e-voting-documentation";
  const source = "https://gitlab.com/swisspost-evoting/e-voting/e-voting";
  const links = [
    [
      "System architecture",
      `${documentation}/-/blob/master/System/SwissPost_Voting_System_architecture_document.pdf`,
    ],
    [
      "Detailed protocol specification",
      `${documentation}/-/blob/master/System/System_Specification.pdf`,
    ],
    [
      "Cryptographic proofs",
      `${documentation}/-/blob/master/Protocol/Swiss_Post_Voting_Protocol_Computational_proof.pdf`,
    ],
    ["Build instructions", `${source}/-/blob/master/BUILDING.md`],
    ["Changelog", `${source}/-/blob/master/CHANGELOG.md`],
    [
      "Reproducible-build process",
      `${documentation}/-/blob/master/Trusted-Build/Trusted%20Build%20of%20the%20Swiss%20Post%20Voting%20System.md`,
    ],
    [
      "Release hashes & signed protocols",
      `${documentation}/-/tree/master/Trusted-Build/E-Voting`,
    ],
    ["Supporting documentation", documentation],
  ];
  for (const [name, url] of links) {
    const link = precedents.getByRole("link", { name, exact: false });
    await expect(link).toHaveAttribute("href", url);
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  await expect(precedents.locator(".verification-note")).toContainText(
    "matching build hashes alone do not prove what runs in production",
  );
});

test("the narrative and references remain available without JavaScript", async ({
  browser,
}) => {
  const page = await browser.newPage({ javaScriptEnabled: false });
  await page.goto("http://127.0.0.1:4173/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("#sources-title")).toHaveText("The evidence desk.");
  await expect(page.locator(".source-list li")).toHaveCount(14);
  await expect(page.locator("#essay-title")).toHaveText(
    "The argument for public verification",
  );
  await page
    .locator("summary")
    .filter({ hasText: "Version & change history" })
    .click();
  await expect(
    page.getByText("Provide tagged releases", { exact: false }),
  ).toBeVisible();
  await page.close();
});
