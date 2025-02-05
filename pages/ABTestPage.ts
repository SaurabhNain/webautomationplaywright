import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ABTestPage extends BasePage {
  private readonly abTestingLink = '[href="/abtest"]';
  private readonly titleSelector = 'h3';

  constructor(page: Page) {
    super(page);
  }

  async clickABTestingLink(): Promise<void> {
    await this.page.click(this.abTestingLink);
  }

  async getABTestTitle(): Promise<string> {
    return await this.page.locator(this.titleSelector).textContent() || '';
  }
}