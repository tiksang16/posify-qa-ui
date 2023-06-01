import { expect, Locator, Page } from "@playwright/test";

export class posifyOnlineStore {
  readonly page: Page;
  readonly search: Locator;
  readonly shoppingCart: Locator;
  readonly searchInput: Locator;
  readonly searchConfirm: Locator;
  readonly langButton: Locator;
  readonly langZH_HK: Locator;
  readonly switchZH_HK: Locator;
  readonly sizeFirstOption: Locator;
  readonly quantityTouchspinUp: Locator;
  readonly quantityTouchspinDown: Locator;
  readonly addToCartBtn: Locator;
  readonly grandTotal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.search = page.locator("xpath=//a[(@id='common-desk-search')]");
    this.shoppingCart = page.locator("xpath=//a[@id='common-desk-cart']");
    this.searchInput = page.locator('xpath=//input[contains(@placeholder, "輸入您想找的商品...")]').nth(0);
    this.searchConfirm = page.locator('xpath=//button[@class="btn btn-primary btn-search"]');
    this.langButton = page.locator("xpath=//a[@class='dropdown-toggle lang-button']");
    this.langZH_HK = page.locator("xpath=//span[@class='lang-flag ZH_HK']");
    this.switchZH_HK = page.locator('xpath=//a[@data-lang="ZH_HK"]').nth(0);
    this.sizeFirstOption = page.locator('xpath=//div[@class="option-button"]').nth(0);
    this.quantityTouchspinUp = page.locator('xpath=//button[@class="btn btn-default bootstrap-touchspin-up"]');
    this.quantityTouchspinDown = page.locator('xpath=//button[@class="btn btn-default bootstrap-touchspin-down"]');
    this.addToCartBtn = page.locator('xpath=//span[@class="add-to-cart-button-span"]');

  }

  public async checkIfLangbtnforHKisVisible() {
    const isVisible = await this.langZH_HK.isVisible();
    if(!isVisible) {
      await this.langButton.click();
      await this.switchZH_HK.click();
    }
  }

  public async verifyGrandTotal(total) {
    const totalPrice1 = this.page.locator(`xpath=//span[contains(@class, "grand-total") and contains(text(), "HK$ ${total}")]`).nth(1);
    const totalPrice2 = this.page.locator(`xpath=//p[contains(@class, "pull-right total-container price-container") and contains(text(), "HK$ ${total}")]`);
    expect.soft(totalPrice1).toBeVisible();
    expect.soft(totalPrice2).toBeVisible();
  }


}