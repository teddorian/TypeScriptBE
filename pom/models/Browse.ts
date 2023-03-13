import { expect, Locator, Page } from '@playwright/test';

export class BrowsePage {
  readonly page: Page;
  readonly browseLink: Locator;
  readonly viewAll4636: Locator;
  readonly wow9211: Locator;

  constructor(page: Page) {     
    this.page = page;
    this.browseLink = page.locator("a[href='/demo/browse']");
    this.viewAll4636 = page.locator('[id="routify-app"] div main div div:nth-child(2) div:nth-child(5) div:nth-child(2) button:nth-child(2)');
    this.wow9211 = page.locator('div.text-left.font-bold.text-2xl:has-text("WOW #9211-0")');
  }

  async goto() {
    await this.page.goto('https://brandextender.io/demo/', { waitUntil: 'networkidle' });
  }

  async browseTest(){
    await this.browseLink.click();
    await this.page.mouse.wheel(0, 200);
    await this.viewAll4636.click();
    await this.page.mouse.wheel(0, 500);
    expect(this.wow9211).toBeVisible();
}
}