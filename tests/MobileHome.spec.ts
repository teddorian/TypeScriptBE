import { Page, test, devices } from '@playwright/test';
import { HomePage } from '../POM/models/HomePage';
import { chromium } from 'playwright';
test.use({ ...devices['iPhone 12'] })
test.describe('Home page test from Notion doc for mobile', () => {

  let page: Page;
  let homePage: HomePage;
  
  test.beforeAll(async () => {
    const browser = await chromium.launch();
    page = await browser.newPage();
    homePage = new HomePage(page);  
  });

  test.beforeEach(async () => {
    await homePage.goto();
  });
 
  test('click links in mobile sandwitch menu', async () => {
    await homePage.clickMobileLinksFromMenu();
  });

  test('click links in mobile Welcome section', async () => {
    await homePage.welcomeSectionLinksMobile();
  });

  test('click links in mobile footer', async () => {
    await homePage.footerLinks();
  })

  test('connect wallet modal opened',async () => {
    await homePage.connectWalletBtn();
  })

});
