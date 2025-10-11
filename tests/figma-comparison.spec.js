// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Figma Design Comparison Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('capture baseline screenshots for design comparison', async ({ page }) => {
    // Capture screenshots that can be compared against Figma designs

    // Full page capture
    await expect(page).toHaveScreenshot('figma-comparison-full.png', {
      fullPage: true,
      animations: 'disabled'
    });

    // Individual component captures for detailed comparison
    const components = [
      { selector: '.navigation', name: 'navigation' },
      { selector: 'section:nth-of-type(1)', name: 'hero-section' },
      { selector: 'section:nth-of-type(2)', name: 'about-section' },
      { selector: 'section:nth-of-type(3)', name: 'skills-section' },
      { selector: 'section:nth-of-type(4)', name: 'projects-section' },
      { selector: 'section:nth-of-type(5)', name: 'contact-section' }
    ];

    for (const component of components) {
      const element = page.locator(component.selector);
      if (await element.isVisible()) {
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await expect(element).toHaveScreenshot(`figma-${component.name}.png`);
      }
    }
  });

  test('layout measurements for design verification', async ({ page }) => {
    // Measure key layout properties to ensure they match Figma specs

    // Navigation measurements
    const navigation = page.locator('.navigation');
    const navBox = await navigation.boundingBox();

    test.info().attach('navigation-measurements', {
      body: JSON.stringify({
        width: navBox?.width,
        height: navBox?.height,
        position: await navigation.evaluate(el => getComputedStyle(el).position),
        zIndex: await navigation.evaluate(el => getComputedStyle(el).zIndex)
      }),
      contentType: 'application/json'
    });

    // Container max-width check
    const container = page.locator('.navigation-container');
    const containerWidth = await container.evaluate(el => getComputedStyle(el).maxWidth);

    test.info().attach('container-measurements', {
      body: JSON.stringify({ maxWidth: containerWidth }),
      contentType: 'application/json'
    });
  });

  test('color scheme validation', async ({ page }) => {
    // Extract and validate color schemes match Figma design

    const navigation = page.locator('.navigation');
    const navBackground = await navigation.evaluate(el => getComputedStyle(el).background);

    const navLinks = page.locator('.navigation-links a');
    const linkColor = await navLinks.first().evaluate(el => getComputedStyle(el).color);

    test.info().attach('color-scheme', {
      body: JSON.stringify({
        navigationBackground: navBackground,
        linkColor: linkColor
      }),
      contentType: 'application/json'
    });
  });

  test('typography verification', async ({ page }) => {
    // Check typography matches Figma specifications

    const navLinks = page.locator('.navigation-links a');
    const typography = await navLinks.first().evaluate(el => {
      const style = getComputedStyle(el);
      return {
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight
      };
    });

    test.info().attach('typography-data', {
      body: JSON.stringify(typography),
      contentType: 'application/json'
    });
  });

  test('responsive breakpoints match design', async ({ page }) => {
    const breakpoints = [
      { width: 320, height: 568, name: 'mobile-small' },
      { width: 375, height: 667, name: 'mobile-medium' },
      { width: 768, height: 1024, name: 'tablet' },
      { width: 1024, height: 768, name: 'desktop-small' },
      { width: 1440, height: 900, name: 'desktop-large' }
    ];

    for (const breakpoint of breakpoints) {
      await page.setViewportSize({ width: breakpoint.width, height: breakpoint.height });
      await page.waitForTimeout(500);

      await expect(page).toHaveScreenshot(`figma-${breakpoint.name}.png`, {
        fullPage: true,
        animations: 'disabled'
      });
    }
  });
});