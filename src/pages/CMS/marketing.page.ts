import { expect, Locator, Page } from "@playwright/test";

export default class posifyMarketingPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly addPromotion: Locator;
  readonly advanceSetting: Locator;
  readonly saveBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("xpath=//input[(@name='login')]");
    this.addPromotion = page.locator("xpath=//button[@class='btn btn-default btn-sm']");
    this.advanceSetting = page.locator("xpath=//button[@class='btn btn-sm btn-ctrl btn-info']");
    this.saveBtn = page.locator("xpath=//button[@class='btn btn-sm btn-ctrl btn-success']");

  }


}
