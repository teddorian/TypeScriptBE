import { Page, test, expect } from '@playwright/test';
import { SuitUpPage } from '../POM/models/SuitUpPage';
import { chromium } from 'playwright';

test.describe('test on SuitUp page', () => {
  let page: Page;
  let suitupPage: SuitUpPage;
  
  test.beforeAll(async () => {
    const browser = await chromium.launch();
    page = await browser.newPage();
    suitupPage = new SuitUpPage(page);
  });

  test.beforeEach(async () => {
    await suitupPage.goto();
  });

test('SuitUp test from Notion', async ({ page }) => {
  await suitupPage.Suitup();
})

test('Counter, Editing/Remove in Minting test from Notion', async({page}) =>{
  await suitupPage.Preview();
})
})



