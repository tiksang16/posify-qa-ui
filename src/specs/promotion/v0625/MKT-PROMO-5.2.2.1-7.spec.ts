import { Page, test, expect } from "@playwright/test";
import { posifyOnlineStore } from "../../../pages/OnlineStore/posifyOnlineStore.page";
import { posifyShoppingCart } from "../../../pages/OnlineStore/posifyShoppingCart.page";
import posifyLoginPage from "../../../pages/CMS/login.page";
import posifyMarketingPage from "../../../pages/CMS/marketing.page";

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

  test("MKT/PROMO/5.2.2.1/7 - 买相等于数量2就可以获得2倍购物金，实际数量买2", async () => {
    await marketingPage.activatePromotion("买相等于数量2送2倍购物金");

    await onlineStore.page.goto(
      "https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#"
    );
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.checkIfLangbtnforHKisVisible();
    await onlineStore.login("posifytest@posify.me", "posifytest");
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.search.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.searchItem("聯名款板鞋");
    await onlineStore.page.waitForTimeout(9000);
    await onlineStore.sizeFirstOption.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await shoppingCart.goCheckOut.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.page.mouse.down();
    await onlineStore.orderReady.click();
    await onlineStore.page.waitForTimeout(3000);
    await onlineStore.verifyGrandTotal("2000");
    await onlineStore.orderSubmit.click();
    await onlineStore.page.waitForTimeout(6000);
    await onlineStore.profileBtn.click();
    await onlineStore.myPoint.click();
    await onlineStore.notActivePoint.click();
  

    await marketingPage.deactivatePromotion("买相等于数量2送2倍购物金");
  });
});
