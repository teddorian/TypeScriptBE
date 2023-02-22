import { test, expect } from '@playwright/test';
import { SuitUpPage } from '../pom/models/SuitUpPage';

test.describe('BrandExtender Shop', () => {
test('Should allow me Select your clothes, the number of mints, and continue to preview before minting', async ({ page }) => {
  const suitupPage = new SuitUpPage(page);
  await suitupPage.goto();
  await suitupPage.Suitup();
})
})
