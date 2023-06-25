import { expect, Locator, Page } from "@playwright/test";

export default class posifyMarketingPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly addPromotion: Locator;
  readonly advanceSetting: Locator;
  readonly saveBtn: Locator;
  readonly nextBtn: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly signOutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("xpath=//input[(@name='login')]");
    this.addPromotion = page.locator("xpath=//button[@class='btn btn-default btn-sm']");
    this.advanceSetting = page.locator("xpath=//button[@class='btn btn-sm btn-ctrl btn-info']");
    this.saveBtn = page.locator("xpath=//button[@class='btn btn-sm btn-ctrl btn-success']");
    this.nextBtn = page.locator("xpath=//button[(@id='btn_next_step')]");
    this.password = page.locator("xpath=//input[(@name='password')]");
    this.loginBtn = page.locator('xpath=//button[contains(@class, "btn btn-primary btn-block")]').nth(2);
    this.signOutBtn = page.locator('xpath=//span[text()="登出"]');

  }

  public async activatePromotion(promotionText) {
    await this.page.goto(
      "https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=customer%2Fmanage-client"
    );
    await this.userName.fill("posifyadmin");
    await this.nextBtn.click();
    await this.password.fill("102938");
    await this.loginBtn.click();
    await this.page.waitForTimeout(5000);
    await this.page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[10]/a/span').click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole("link", { name: "推广优惠" }).click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole('link', { name: '已停用' }).click();
    await this.page.waitForTimeout(4000);
    await this.page.getByRole('combobox', { name: '显示 纪录' }).selectOption('100');
    await this.page.waitForTimeout(4000);
    await this.page.locator('tr', { hasText: `${promotionText}` }).locator("xpath=//button[@data-category='promotion']").nth(0).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('#tab_general').getByText('否').click();
    await this.page.waitForTimeout(2000);
    await this.saveBtn.click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("xpath=//img[@src='/atpromotiontest@7.3.01.2203.0905w/images/no-user.png']").nth(0).click();
    await this.page.getByText("登出").nth(0).click();
    await this.page.waitForTimeout(2000);
  }

  public async deactivatePromotion(promotionText) {
    await this.page.goto(
      "https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=customer%2Fmanage-client"
    );
    await this.userName.fill("posifyadmin");
    await this.nextBtn.click();
    await this.password.fill("102938");
    await this.loginBtn.click();
    await this.page.waitForTimeout(5000);
    await this.page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[10]/a/span').click();
    await this.page.waitForTimeout(2000);
    await this.page.getByRole("link", { name: "推广优惠" }).click();
    await this.page.waitForTimeout(2000);
    await this.page.locator('tr', { hasText: `${promotionText}` }).locator("xpath=//button[@data-category='promotion']").nth(0).click();
    await this.page.waitForTimeout(3000);
    await this.page.locator('#tab_general').getByText('是').click();
    await this.page.waitForTimeout(2000);
    await this.saveBtn.click();
    await this.page.waitForTimeout(2000);
    await this.page.locator("xpath=//img[@src='/atpromotiontest@7.3.01.2203.0905w/images/no-user.png']").nth(0).click();
    await this.page.getByText("登出").nth(0).click();
    await this.page.waitForTimeout(2000);
  }


}
