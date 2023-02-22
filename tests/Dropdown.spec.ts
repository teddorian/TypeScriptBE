import { test, expect } from '@playwright/test';
import { SuitUpPage } from '../pom/models/SuitUpPage';

test.describe('BrandExtender Shop', () => {
test('Should allow me select from dropdown and scroll in Clothing, Accessories, Background', async ({ page }) => {
  const suitupPage = new SuitUpPage(page);
  await suitupPage.goto();
  await suitupPage.Dropdown();
})
})