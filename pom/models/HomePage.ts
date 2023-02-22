import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly visitBtn: Locator;
  readonly modalTitle: Locator;
  readonly browse: Locator;
  readonly brandExtender: Locator;
  readonly tokenScript: Locator;
  readonly twitterHeader: Locator;
  readonly discordHeader: Locator;
  readonly mediumHeader: Locator;

constructor(page: Page) {     
  this.page = page;
  this.visitBtn = page.locator('div[class="lg:mt-8 lg:flex"] button');
  this.modalTitle = page.locator('h4.mx-auto.mt-10');
  this.browse = page.locator("div [href='/demo/browse']");
  this.brandExtender = page.locator("div.hidden.items-center [alt='Brand Extender']");
  this.tokenScript = page.locator("div.hidden.items-center [alt='TokenScript']");
  this.twitterHeader = page.locator('div.hidden a[href="https://twitter.com/TokenScript"]');
  this.discordHeader = page.locator('div.hidden a[href="https://discord.gg/65r8HRBye9"]');
  this.mediumHeader = page.locator('div.hidden a[href="https://medium.com/alphawallet"]');
  }
  
  async goto() {
    await this.page.goto('https://brandextender.io/demo/');
  }

  async clickLinksHeader(){
    await this.browse.click();
    await this.brandExtender.click();
    await this.tokenScript.click();
    await this.twitterHeader.click();
    await this.discordHeader.click();
    await this.mediumHeader.click();

    }
  async connectWallet() {
    await this.visitBtn.click();
    await expect(this.modalTitle).toBeVisible();
    await this.page.close();
    }
}