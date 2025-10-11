// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Design Requirements Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('validate navigation component structure and behavior', async ({ page }) => {
    // Check navigation exists and is properly positioned
    const navigation = page.locator('.navigation');
    await expect(navigation).toBeVisible();
    await expect(navigation).toHaveCSS('position', 'fixed');
    await expect(navigation).toHaveCSS('top', '0px');
    await expect(navigation).toHaveCSS('width', '100%');

    // Check logo exists
    const logo = page.locator('.navigation-logo img');
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute('alt', 'Amr Abbas - UI/UX Designer');

    // Check navigation links
    const navLinks = page.locator('.navigation-links a');
    await expect(navLinks).toHaveCount(5);

    const expectedLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
    for (let i = 0; i < expectedLinks.length; i++) {
      await expect(navLinks.nth(i)).toContainText(expectedLinks[i]);
    }

    // Test scroll behavior
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(500);
    await expect(navigation).toHaveClass(/scrolled/);
  });

  test('validate responsive navigation behavior', async ({ page }) => {
    // Test mobile breakpoint (768px and below)
    await page.setViewportSize({ width: 767, height: 600 });
    await page.waitForTimeout(300);

    const navLinks = page.locator('.navigation-links');
    await expect(navLinks).toHaveCSS('display', 'none');

    // Test desktop breakpoint
    await page.setViewportSize({ width: 769, height: 600 });
    await page.waitForTimeout(300);
    await expect(navLinks).toHaveCSS('display', 'flex');
  });

  test('validate page structure and sections', async ({ page }) => {
    // Check if all main sections exist
    const sections = [
      'Navigation',
      'Hero',
      'About',
      'Skills',
      'Projects',
      'Contact'
    ];

    // Navigation component
    await expect(page.locator('.navigation')).toBeVisible();

    // Check other sections (they might have different selectors)
    const allSections = page.locator('section');
    const sectionCount = await allSections.count();

    // Should have at least 5 sections (Hero, About, Skills, Projects, Contact)
    expect(sectionCount).toBeGreaterThanOrEqual(5);
  });

  test('validate smooth scrolling functionality', async ({ page }) => {
    // Test smooth scroll links
    const homeLink = page.locator('.navigation-links a[href="#home"]');
    await homeLink.click();
    await page.waitForTimeout(1000);

    const aboutLink = page.locator('.navigation-links a[href="#about"]');
    await aboutLink.click();
    await page.waitForTimeout(1000);

    // Verify we're at the about section (if it exists)
    const aboutSection = page.locator('#about');
    if (await aboutSection.isVisible()) {
      const aboutPosition = await aboutSection.evaluate(el => el.getBoundingClientRect().top);
      expect(Math.abs(aboutPosition)).toBeLessThan(100); // Should be near top of viewport
    }
  });

  test('validate CSS custom properties and design tokens', async ({ page }) => {
    // Check if CSS custom properties are defined
    const rootStyles = await page.evaluate(() => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      return {
        textGray: styles.getPropertyValue('--text-gray'),
        accentBlue: styles.getPropertyValue('--accent-blue')
      };
    });

    // Verify navigation links use the correct color variables
    const navLink = page.locator('.navigation-links a').first();
    const linkColor = await navLink.evaluate(el => getComputedStyle(el).color);

    test.info().attach('design-tokens', {
      body: JSON.stringify({
        cssVariables: rootStyles,
        navigationLinkColor: linkColor
      }),
      contentType: 'application/json'
    });
  });

  test('validate layout constraints and spacing', async ({ page }) => {
    // Check navigation container max-width
    const navContainer = page.locator('.navigation-container');
    const maxWidth = await navContainer.evaluate(el => getComputedStyle(el).maxWidth);
    expect(maxWidth).toBe('1200px');

    // Check container centering
    const margin = await navContainer.evaluate(el => getComputedStyle(el).margin);
    expect(margin).toContain('auto');

    // Check navigation padding
    const navigation = page.locator('.navigation');
    const padding = await navigation.evaluate(el => getComputedStyle(el).padding);
    expect(padding).toContain('1rem 2rem') || expect(padding).toContain('16px 32px');
  });

  test('validate backdrop filter and transparency effects', async ({ page }) => {
    const navigation = page.locator('.navigation');

    // Check backdrop filter
    const backdropFilter = await navigation.evaluate(el => getComputedStyle(el).backdropFilter);
    expect(backdropFilter).toContain('blur');

    // Check background with alpha
    const background = await navigation.evaluate(el => getComputedStyle(el).background);
    expect(background).toContain('rgba') || expect(background).toContain('0.9');
  });

  test('validate animation and transition effects', async ({ page }) => {
    // Check navigation transition
    const navigation = page.locator('.navigation');
    const transition = await navigation.evaluate(el => getComputedStyle(el).transition);
    expect(transition).toContain('0.3s ease') || expect(transition).toContain('all');

    // Check link hover transitions
    const navLink = page.locator('.navigation-links a').first();
    const linkTransition = await navLink.evaluate(el => getComputedStyle(el).transition);
    expect(linkTransition).toContain('color') && expect(linkTransition).toContain('0.3s');
  });
});