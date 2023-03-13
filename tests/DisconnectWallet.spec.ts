import { Page, test, expect } from '@playwright/test';
import { HomePage } from '../POM/models/HomePage';
import { chromium } from 'playwright';

let page: Page;
let homePage: HomePage;

test.describe('Disconnect wallet test from Notion doc', () => {

test.beforeAll(async () => {
  const browser = await chromium.launch();
  page = await browser.newPage();
  homePage = new HomePage(page);
});

test.beforeEach(async () => {
  await homePage.goto();
});

test ('Disconnect wallet', async () => {
  await homePage.disconnectWallet();
});
})