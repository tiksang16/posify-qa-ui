import { expect, Locator, Page } from "@playwright/test";

export class posifyShoppingCart {
  readonly page: Page;
  readonly itempromotion: Locator;
  readonly totalPrice: Locator;
  readonly deleteCartBtn: Locator;
  readonly goCheckOut: Locator;
  readonly touchspinDown: Locator;
  readonly touchspinUp: Locator;
  readonly quanitySniper: Locator;
  readonly closeCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.itempromotion = page
      .locator('xpath=//div[@class="item-promotion"]')
      .nth(1);
    this.totalPrice = page.locator(
      'xpath=//p[@class="pull-right total-container price-container"]'
    );
    this.deleteCartBtn = page
      .locator(
        'xpath=//img[@src="/atpromotiontest@7.3.01.2203.0905w/images/icons/cart-delete.png"]'
      )
      .nth(1);
    this.goCheckOut = page
      .locator('xpath=//button[@id="side-cart-go-checkout"]')
      .nth(0);
    this.touchspinDown = page
      .locator(
        'xpath=//button[@class="btn btn-primary bootstrap-touchspin-down"]'
      )
      .nth(1);
    this.touchspinUp = page
      .locator(
        'xpath=//button[@class="btn btn-primary bootstrap-touchspin-up"]'
      )
      .nth(1);
    this.quanitySniper = page
      .locator('xpath=//input[@class="form-control quanitySniper"]')
      .nth(0);
    this.closeCartBtn = page.locator(
      'xpath=//a[@class="pull-left text-theme-color"]'
    );
  }

  public async checkPromotionText(PromoText, TotalPrice) {
    const promotionPromoTextLocator = this.page.locator(
      `xpath=//div[@class="item-promotion"]/div[contains(@class, "title") and contains(text(), "${PromoText}")]`
    );
    expect(promotionPromoTextLocator).toBeVisible();
    // expect(promotionPromoTextLocator.textContent()).toEqual(PromoText);
    expect(this.totalPrice).toContainText(`${TotalPrice}`);
  }

  public async checkPromotionTextNotVisible(PromoText, TotalPrice) {
    const nonpromotionPromoTextLocator = this.page.locator(
      `xpath=//div[@class="item-promotion"]/div[contains(@class, "title") and contains(text(), "${PromoText}")]`
    );
    // expect(nonpromotionPromoTextLocator).toBeVisible(true);
    expect(this.totalPrice).toContainText(`${TotalPrice}`);
  }
}