import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/recipes/);
});

test('app renders without errors', async ({ page }) => {
  await page.goto('/');
  
  // Wait for React to load
  await page.waitForLoadState('networkidle');
  
  // Check that the root element exists
  const root = page.locator('#root');
  await expect(root).toBeVisible();
});
