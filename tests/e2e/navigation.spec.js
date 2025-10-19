import { test, expect } from '@playwright/test';

test('navigate to first venue details page', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('.venue-list'); // wait for list to load
  await page.click('.venue-list .venue-item:first-child');
  await expect(page.locator('h1')).toHaveText(/venue details/i);
});
