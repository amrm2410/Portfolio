// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Portfolio Visual Design Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage and take full page screenshot', async ({ page }) => {
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Take full page screenshot for visual comparison
    await expect(page).toHaveScreenshot('homepage-full.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('navigation component should match design', async ({ page }) => {
    // Wait for navigation to be visible
    await expect(page.locator('.navigation')).toBeVisible();

    // Test navigation styling
    const navigation = page.locator('.navigation');
    await expect(navigation).toHaveCSS('position', 'fixed');
    await expect(navigation).toHaveCSS('top', '0px');

    // Take screenshot of navigation
    await expect(navigation).toHaveScreenshot('navigation-component.png');
  });

  test('hero section should be properly styled', async ({ page }) => {
    // Wait for hero section
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();

    // Take screenshot of hero section
    await expect(hero).toHaveScreenshot('hero-section.png');
  });

  test('responsive design on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForLoadState('networkidle');

    // Take mobile screenshot
    await expect(page).toHaveScreenshot('homepage-mobile.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('responsive design on tablet', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForLoadState('networkidle');

    // Take tablet screenshot
    await expect(page).toHaveScreenshot('homepage-tablet.png', {
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('color scheme and typography verification', async ({ page }) => {
    // Check navigation link colors
    const navLinks = page.locator('.navigation-links a');
    await expect(navLinks.first()).toBeVisible();

    // Test hover states
    await navLinks.first().hover();
    await page.waitForTimeout(500); // Wait for transition
    await expect(page.locator('.navigation')).toHaveScreenshot('navigation-hover.png');
  });

  test('scroll behavior and animations', async ({ page }) => {
    // Test initial state
    await expect(page).toHaveScreenshot('scroll-top.png', { fullPage: true });

    // Scroll down to trigger navigation changes
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);

    // Check if navigation has 'scrolled' class
    await expect(page.locator('.navigation.scrolled')).toBeVisible();
    await expect(page.locator('.navigation')).toHaveScreenshot('navigation-scrolled.png');
  });

  test('component sections visibility and layout', async ({ page }) => {
    const sections = [
      { selector: '[id="home"]', name: 'hero' },
      { selector: '[id="about"]', name: 'about' },
      { selector: '[id="skills"]', name: 'skills' },
      { selector: '[id="projects"]', name: 'projects' },
      { selector: '[id="contact"]', name: 'contact' }
    ];

    for (const section of sections) {
      if (await page.locator(section.selector).isVisible()) {
        await page.locator(section.selector).scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        await expect(page.locator(section.selector)).toHaveScreenshot(`${section.name}-section.png`);
      }
    }
  });
});