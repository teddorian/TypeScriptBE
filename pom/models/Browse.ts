import { expect, Locator, Page } from '@playwright/test';

export class BrowsePage {
  readonly page: Page;
  readonly browseLink: Locator;
  readonly viewAll4636: Locator;
  readonly wow9211: Locator;

  constructor(page: Page) {     
    this.page = page;
    this.browseLink = page.getByRole('link', {name: 'Browse'});
    this.viewAll4636 = page.locator('//*[@id="routify-app"]/div[2]/main/div/div[2]/div[3]/div[1]/div[2]/div[2]/button[2]/span');
    this.wow9211 = page.locator('div.text-left.font-bold.text-2xl:has-text("WOW #9211-0")');
  }

  async goto() {
    await this.page.goto('https://demo.brandextender.io/', { waitUntil: 'networkidle' });
  }

  async browseTest(){
    await this.browseLink.click();
    await this.page.mouse.wheel(0, 200);
    await this.viewAll4636.click();
    await this.page.mouse.wheel(0, 500);
    expect(this.wow9211).toBeVisible();
}
}