const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE size
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15'
  });

  const page = await context.newPage();

  console.log('📱 Testing mobile view (375x667)...\n');

  // Navigate to localhost
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Wait a bit for render
  await page.waitForTimeout(2000);

  // Check if projects section exists
  const projectsSection = await page.$('#projects');
  console.log('Projects section exists:', !!projectsSection);

  if (projectsSection) {
    const isVisible = await projectsSection.isVisible();
    console.log('Projects section visible:', isVisible);

    // Get computed styles
    const styles = await page.evaluate(() => {
      const section = document.querySelector('#projects');
      const grid = document.querySelector('.projects-grid');

      if (!section || !grid) return null;

      const sectionStyles = window.getComputedStyle(section);
      const gridStyles = window.getComputedStyle(grid);

      return {
        section: {
          display: sectionStyles.display,
          visibility: sectionStyles.visibility,
          opacity: sectionStyles.opacity,
          padding: sectionStyles.padding
        },
        grid: {
          display: gridStyles.display,
          gridTemplateColumns: gridStyles.gridTemplateColumns,
          gap: gridStyles.gap,
          width: gridStyles.width
        }
      };
    });

    console.log('\nSection Styles:', JSON.stringify(styles?.section, null, 2));
    console.log('\nGrid Styles:', JSON.stringify(styles?.grid, null, 2));

    // Check project cards
    const cards = await page.$$('.projects-card');
    console.log('\nNumber of project cards found:', cards.length);

    if (cards.length > 0) {
      const firstCardVisible = await cards[0].isVisible();
      console.log('First card visible:', firstCardVisible);

      const firstCardBox = await cards[0].boundingBox();
      console.log('First card position:', firstCardBox);
    }

    // Scroll to projects section
    await page.evaluate(() => {
      document.querySelector('#projects')?.scrollIntoView();
    });

    await page.waitForTimeout(1000);

    // Take screenshot
    await page.screenshot({ path: 'mobile-projects-debug.png', fullPage: true });
    console.log('\n📸 Screenshot saved as mobile-projects-debug.png');
  } else {
    console.log('❌ Projects section not found in DOM!');
  }

  console.log('\n✅ Test complete. Browser will stay open for manual inspection.');
  console.log('Press Ctrl+C to close when done.');

  // Keep browser open for inspection
  await page.waitForTimeout(60000);

  await browser.close();
})();
