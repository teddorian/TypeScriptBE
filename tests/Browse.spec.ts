import { Page, test, expect } from '@playwright/test';
import { BrowsePage } from '../POM/models/Browse';
import { chromium } from 'playwright';

test.describe('Browse page test from Notion doc', () => {
    let page: Page;
    let browsePage: BrowsePage;
    
    test.beforeAll(async () => {
      const browser = await chromium.launch();
      page = await browser.newPage();
      browsePage = new BrowsePage(page);
    });
  
    test.beforeEach(async () => {
      await browsePage.goto();
    });
  
    test('click Browse link and assert Derivatives are visible ', async () => {
      await browsePage.browseTest();
    });
})
