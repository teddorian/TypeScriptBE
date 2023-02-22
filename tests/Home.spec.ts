import { Page, test, expect } from '@playwright/test';
import { HomePage } from '../pom/models/HomePage';
import { chromium } from 'playwright';

test.describe('My Test Suite', () => {
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

  test('connect wallet', async () => {
    await homePage.connectWallet();
  });
});
