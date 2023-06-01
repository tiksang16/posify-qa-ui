import { expect, Locator, Page } from "@playwright/test";

export default class posifyMarketingPage {
  readonly page: Page;
  readonly userName: Locator;


  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("xpath=//input[(@name='login')]");

  }


}
