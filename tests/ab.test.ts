import { test } from '@playwright/test';
import { ABTestPage } from '../pages/ABTestPage';

test.describe('A/B Test Suite', () => {
  let abPage: ABTestPage;

  test.beforeEach(async ({ page }) => {
    abPage = new ABTestPage(page);
    await abPage.goto();
  });

  test('should validate A/B test page title', async ({ expect }) => {
    const expectedTitle = 'A/B Test';
    
    await abPage.clickABTestingLink();
    const actualTitle = await abPage.getABTestTitle();
    
    expect(actualTitle).toMatch(new RegExp(`^${expectedTitle}`));
    console.log('Test A/B successful');
  });
});