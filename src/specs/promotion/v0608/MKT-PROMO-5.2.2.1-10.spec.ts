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

  test("MKT/PROMO/5.2.2.1/10 - 推广规则：买满不少于数量3就可以享受100的固定折扣，有效期外使用", async () => {
  
    await marketingPage.activatePromotion("买满不少于数量3减100，有效期外使用");
    

    await onlineStore.page.goto(
      "https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#"
    );
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.checkIfLangbtnforHKisVisible();
    await onlineStore.search.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.searchInput.fill("聯名款板鞋");
    await onlineStore.searchConfirm.click();
    await onlineStore.page.waitForTimeout(9000);
    await onlineStore.sizeFirstOption.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await expect.soft(shoppingCart.totalPrice).toContainText("HK$ 3000");
    await shoppingCart.goCheckOut.click();
    await onlineStore.page.waitForTimeout(3000);
    await onlineStore.verifyGrandTotal("3000");
    await onlineStore.shoppingCart.click();
    await shoppingCart.deleteCartBtn.click();
    await onlineStore.page.waitForTimeout(3000);


    await marketingPage.deactivatePromotion("买满不少于数量3减100，有效期外使用");
  });

});