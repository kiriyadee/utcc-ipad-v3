import test, { expect } from "@playwright/test";
import { afterEach, beforeEach, describe } from "node:test";

import { Browser, chromium, Page } from "playwright";

describe("Example Test", () => {
  let browser: Browser;
  let page: Page;

  beforeEach(async () => {
    await page.goto("https://ipadcheckout.boring9.dev");
  });

  afterEach(async () => {
    await page.close();
  });

  test('Page title should be "Example Domain"', async () => {
    const title = await page.title();
    expect(title).toBe("Example Domain");
  });
});
