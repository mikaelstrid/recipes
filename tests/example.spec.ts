import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Våra recept');
});

test('app renders without errors', async ({ page }) => {
  await page.goto('/');
  
  // Wait for React to load
  await page.waitForLoadState('networkidle');
  
  // Check that the root element exists
  const root = page.locator('#root');
  await expect(root).toBeVisible();
});

test('displays recipe list', async ({ page }) => {
  await page.goto('/');
  
  // Wait for React to load
  await page.waitForLoadState('networkidle');
  
  // Check that the header exists
  const header = page.locator('h1');
  await expect(header).toContainText('Våra recept');
  
  // Check that recipe cards exist
  const recipeCards = page.locator('.recipe-card');
  await expect(recipeCards).toHaveCount(3);
});

test('displays footer', async ({ page }) => {
  await page.goto('/');
  
  // Wait for React to load
  await page.waitForLoadState('networkidle');
  
  // Check that the footer exists
  const footer = page.locator('.footer');
  await expect(footer).toContainText('Copyright Mikael Strid');
});
