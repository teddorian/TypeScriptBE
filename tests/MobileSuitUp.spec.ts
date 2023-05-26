import { Page, test, expect, devices } from '@playwright/test';
import { SuitUpPage } from '../POM/models/SuitUpPage';
import { chromium } from 'playwright';

test.use({ ...devices['iPhone 12'] })
test.describe('SuitUp page test from Notion doc for mobile', () => {

  let page: Page;
  let suitUpPage: SuitUpPage;

test.describe('test on mobile SuitUp page', () => {
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

// test('SuitUp mobile test from Notion', async ({ page }) => {
//   await suitupPage.SuitupMobile();
// });

test('Counter, Editing/Remove in Minting test from Notion', async({page}) =>{
  await suitupPage.PreviewMobile();
});

})
})
