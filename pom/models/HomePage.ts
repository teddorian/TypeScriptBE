import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly visitBtn: Locator;
  readonly modalTitle: Locator;
  readonly browse: Locator;
  readonly m_browse: Locator;
  readonly brandExtender: Locator;
  readonly m_brandExtender: Locator;
  readonly tokenScript: Locator;
  readonly m_tokenScript: Locator;
  readonly twitterHeader: Locator;
  readonly m_twitter: Locator;
  readonly discordHeader: Locator;
  readonly m_discord: Locator;
  readonly mediumHeader: Locator;
  readonly m_medium: Locator;
  readonly emailLink: Locator;
  readonly twitterLink: Locator;
  readonly m_twitterLink: Locator;
  readonly discordLink: Locator;
  readonly m_discordLink: Locator;
  readonly stlLink: Locator;
  readonly brandExtenderFooter: Locator;
  readonly tokenScriptFooter: Locator;
  readonly twitterFooter: Locator;
  readonly discordFooter: Locator;
  readonly mediumFooter: Locator;
  readonly dropdownTriggerSelector: Locator;
  readonly dropdownItemSelector: Locator;
  readonly mobileMenu: Locator;
  readonly closeMobileMenu: Locator;

constructor(page: Page) {     
  this.page = page;
  this.visitBtn = page.getByRole('button', { name: /Connect Wallet/ });
  //this.visitBtn = page.locator('div[class="lg:mt-8 lg:flex"] button');
  this.modalTitle = page.getByRole('heading', { name: 'Connect your wallet' });
  //this.modalTitle = page.locator('h4.mx-auto.mt-10');
  this.browse = page.getByRole('link', {name: 'Browse'});
  //this.browse = page.locator("a[href='/browse'].mr-6");
  this.m_browse = page.getByRole('link', {name: 'Browse'});
  //this.m_browse = page.locator("div.mt-9 a[href='/demo/browse']")
  this.brandExtender = page.locator("div.hidden.items-center [alt='Brand Extender']");
  this.m_brandExtender = page.locator("div.mt-9 a[href='https://derivatives.tokenscript.org/']");
  this.tokenScript = page.locator("div.hidden.items-center [alt='TokenScript']");
  this.m_tokenScript = page.locator("div.mt-9 a[href='https://www.tokenscript.org/']");
  this.twitterHeader = page.locator('div.hidden a[href="https://twitter.com/TokenScript"]');
  this.m_twitter = page.locator("div.mb-8 a[href='https://twitter.com/TokenScript']");
  this.discordHeader = page.locator('div.hidden a[href="https://discord.gg/65r8HRBye9"]');
  this.m_discord = page.locator("aside .mb-8 a[href='https://discord.gg/65r8HRBye9']");
  this.mediumHeader = page.locator('div.hidden a[href="https://medium.com/alphawallet"]');
  this.m_medium = page.locator("aside .mb-8 a[href='https://medium.com/alphawallet'] span");
  this.emailLink = page.locator('a[href="mailto:sayhi@smarttokenlabs.com"]');
  this.twitterLink = page.locator('a[href="https://twitter.com/TokenScript"].px-11');
  this.m_twitterLink = page.locator('div.mt-12 a[href="https://twitter.com/TokenScript"]');
  this.discordLink = page.locator('a[href="https://discord.gg/65r8HRBye9"].px-11');
  this.m_discordLink = page.locator('div.mt-12 a[href="https://discord.gg/65r8HRBye9"]');
  this.stlLink = page.locator('a[href="https://smarttokenlabs.com/"]');
  this.brandExtenderFooter = page.locator('div.flex.flex-col a[href="https://derivatives.tokenscript.org/"]');
  this.tokenScriptFooter = page.locator('div.flex.flex-col a[href="https://www.tokenscript.org/"]');
  this.twitterFooter = page.locator('div.flex.flex-col a[href="https://twitter.com/TokenScript"]');
  this.discordFooter = page.locator('div.flex.flex-col a[href="https://discord.gg/65r8HRBye9"]');
  this.mediumFooter = page.locator('div.flex.flex-col a[href="https://medium.com/alphawallet"]');
  this.dropdownTriggerSelector = page.locator('div.relative text-[#000]');
  //this.dropdownTriggerSelector = page.locator('div.menu-container.svelte-cdecrt');
  this.dropdownItemSelector = page.locator('#routify-app > div:nth-child(2) > div > section > div > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2)');
  this.mobileMenu = page.locator('div#menu-icon');
  this.closeMobileMenu = page.locator('div.w-8.cursor-pointer');
}
  
  
  async goto() {
    await this.page.goto('https://demo.brandextender.io/', { waitUntil: 'networkidle' });
  }

  async clickLinksHeader(){
    await this.browse.click();
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup', { timeout: 5000 }),
      this.brandExtender.click(),
      this.tokenScript.click(),
      this.twitterHeader.click(),
      this.discordHeader.click(),
      this.mediumHeader.click()
    ]);
    expect(newPage).toBeTruthy();
  }

  async clickMobileLinksFromMenu(){
    
    const [newPage] = await Promise.all([
    this.page.waitForEvent('popup', { timeout: 10000 }),
    await this.mobileMenu.click(),
    await this.m_browse.click(),
    await this.mobileMenu.click(),
    await this.m_brandExtender.click(),
    await this.mobileMenu.click(),
    await this.m_tokenScript.click(),
    await this.mobileMenu.click(),
    await this.m_twitter.click(),
    await this.closeMobileMenu.click(),
    await this.mobileMenu.click(),
    await this.m_discord.click(),
    await this.m_medium.click()
  ]);
  expect(newPage).toBeTruthy();
  await newPage.close();
  }
  
  async welcomeSectionLinksMobile(){
    const [newPage] = await Promise.all([
    this.page.waitForEvent('popup', { timeout: 5000 }),
    this.page.mouse.wheel(0, 300),
    this.emailLink.click(),
    this.m_twitterLink.click(),
    this.m_discordLink.click(),
    ]);
    expect(newPage).toBeTruthy();
  }

  async welcomeSectionLinks(){
    const [newPage] = await Promise.all([
    this.page.waitForEvent('popup', { timeout: 5000 }),
    this.emailLink.click(),
    this.twitterLink.click(),
    this.discordLink.click()
    ]);
    expect(newPage).toBeTruthy();
  }
  
  async footerLinks(){
    const [newPage] = await Promise.all([
    this.page.waitForEvent('popup', { timeout: 5000 }),
    this.stlLink.click(),
    this.brandExtenderFooter.click(),
    this.tokenScriptFooter.click(),
    this.twitterFooter.click(),
    this.discordFooter.click(),
    this.mediumFooter.click()
    ]);
    expect(newPage).toBeTruthy();
  }
  
  async connectWalletBtn() {
    await this.visitBtn.click();
    await expect(this.modalTitle).toBeVisible();
    await this.page.close();
    }

  async disconnectWallet(){
    await this.dropdownTriggerSelector.hover( { timeout: 5000 });
    await this.dropdownItemSelector.click({ timeout: 5000 });

  }
}