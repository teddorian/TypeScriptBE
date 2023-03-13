import { Page, test, expect } from '@playwright/test';
import { HomePage } from '../POM/models/HomePage';
import { chromium } from 'playwright';

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

  test('click links in Header', async () => {
    await homePage.clickLinksHeader();
  });

  test('click links in Welcome Section',async () => {
    await homePage.welcomeSectionLinks();
  })

  test('click links in Footer', async () =>{
    await homePage.footerLinks();
  })

  test('connect wallet', async () => {
    await homePage.connectWalletBtn();
  });

});
