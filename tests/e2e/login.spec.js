import { test, expect } from '@playwright/test';

test('user can login with valid credentials', async ({ page }) => {
  await page.goto('/login'); // adjust URL if needed
  await page.fill('#email', process.env.VITE_TEST_USER_EMAIL);
  await page.fill('#password', process.env.VITE_TEST_USER_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.locator('h1')).toHaveText(/dashboard/i);
});

test('user sees error with invalid credentials', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'wrong@example.com');
  await page.fill('#password', 'wrongpassword');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error')).toHaveText(/invalid credentials/i);
});
