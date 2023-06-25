import { Page, test, expect } from "@playwright/test";
import { posifyOnlineStore } from "../../../pages/OnlineStore/posifyOnlineStore.page";
import { posifyShoppingCart } from "../../../pages/OnlineStore/posifyShoppingCart.page";
import posifyMarketingPage from "../../../pages/CMS/marketing.page";
import posifyLoginPage from "../../../pages/CMS/login.page";


let onlineStore: posifyOnlineStore;
let shoppingCart: posifyShoppingCart;
let loginPage: posifyLoginPage;
let marketingPage: posifyMarketingPage;
test.describe("Promotion ", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({});
    const page = await context.newPage();
    onlineStore = new posifyOnlineStore(page);
    shoppingCart = new posifyShoppingCart(page);
    loginPage = new posifyLoginPage(page);
    marketingPage = new posifyMarketingPage(page);
  });
  test.afterAll(async ({ browser }) => {
    await browser.close();
  });

  test("MKT/PROMO/5.2.2.1/11 - 推广规则：买满不少于数量3就可以享受100的固定折扣已禁用，去使用", async () => {
    await onlineStore.page.goto(
      "https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=customer%2Fmanage-client"
    );
    await loginPage.userName.fill("posifyadmin");
    await loginPage.nextBtn.click();
    await loginPage.password.fill("102938");
    await loginPage.loginBtn.click();
    await loginPage.page.waitForTimeout(5000);
    await loginPage.page
      .locator("xpath=/html/body/div[1]/aside/div[1]/section/ul/li[10]/a/span")
      .click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page.getByRole("link", { name: "推广优惠" }).click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page
      .locator("xpath=//button[@data-category='promotion']")
      .nth(0)
      .click();
    await loginPage.page.waitForTimeout(3000);
    await loginPage.page
      .locator(
        'xpath=//span[@class="bootstrap-switch-handle-on bootstrap-switch-primary"]'
      )
      .nth(0)
      .click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page
      .locator("xpath=//button[@class='btn btn-sm btn-ctrl btn-success']")
      .click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page
      .locator(
        "xpath=//img[@src='/atpromotiontest@7.3.01.2203.0905w/images/no-user.png']"
      )
      .nth(0)
      .click();
    await loginPage.page.getByText("登出").nth(0).click();
    await loginPage.page.waitForTimeout(2000);

    // await onlineStore.page.goto(
    //   "https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#"
    // );
    // await onlineStore.page.waitForTimeout(2000);
    // await onlineStore.checkIfLangbtnforHKisVisible();
    // await onlineStore.search.click();
    // await onlineStore.page.waitForTimeout(2000);
    // await onlineStore.searchInput.fill("聯名款板鞋");
    // await onlineStore.searchConfirm.click();
    // await onlineStore.page.waitForTimeout(9000);
    // await onlineStore.sizeFirstOption.click();
    // await onlineStore.page.waitForTimeout(2000);
    // await onlineStore.quantityTouchspinUp.click();
    // await onlineStore.page.waitForTimeout(2000);
    // await onlineStore.addToCartBtn.click();
    // await onlineStore.page.waitForTimeout(2000);
    // await expect.soft(shoppingCart.totalPrice).toContainText("HK$ 2000");
    // await shoppingCart.goCheckOut.click();
    // await onlineStore.page.waitForTimeout(3000);
    // await onlineStore.verifyGrandTotal("2000");
    // await onlineStore.shoppingCart.click();
    // await shoppingCart.deleteCartBtn.click();
    // await onlineStore.page.waitForTimeout(3000);

    await onlineStore.page.goto(
      "https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=customer%2Fmanage-client"
    );
    await loginPage.userName.fill("posifyadmin");
    await loginPage.nextBtn.click();
    await loginPage.password.fill("102938");
    await loginPage.loginBtn.click();
    await loginPage.page.waitForTimeout(5000);
    await loginPage.page
      .locator("xpath=/html/body/div[1]/aside/div[1]/section/ul/li[10]/a/span")
      .click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page.getByRole("link", { name: "推广优惠" }).click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page
      .locator("xpath=//button[@data-category='promotion']")
      .nth(0)
      .click();
    await loginPage.page.waitForTimeout(3000);
    await loginPage.page
      .locator(
        'xpath=//span[@class="bootstrap-switch-handle-off bootstrap-switch-default"]'
      )
      .nth(0)
      .click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page
      .locator("xpath=//button[@class='btn btn-sm btn-ctrl btn-success']")
      .click();
    await loginPage.page.waitForTimeout(3000);
  });

});