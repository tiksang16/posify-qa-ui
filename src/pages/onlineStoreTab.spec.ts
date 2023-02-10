import { expect, Locator, Page } from "@playwright/test";

export class onlineStoreTab {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnlineStoreTab() {
    await expect(
      this.page.locator(
        "xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/a/span"
      )
    ).toBeVisible();
    await this.page
      .locator("xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/a/span")
      .click();
  }
}