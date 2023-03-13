import { Page, test, devices } from '@playwright/test';
import { HomePage } from '../POM/models/HomePage';
import { chromium } from 'playwright';
test.use({ ...devices['iPhone 12'] })
test.describe('Home page test from Notion doc', () => {

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
 
  test('click links in sandwitch menu', async () => {
    await homePage.clickMobileLinksFromMenu();
  });

});
