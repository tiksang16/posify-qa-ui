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

  test("MKT/PROMO/5.2.2.1/4 - 推广规则：相等于数量1就可以指定商品，以折实价享有10%的折扣", async () => {
    await onlineStore.page.goto('https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#');
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.checkIfLangbtnforHKisVisible();
    await onlineStore.search.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.searchInput.fill("男款中袜");
    await onlineStore.searchConfirm.click();
    await onlineStore.page.waitForTimeout(9000);
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await shoppingCart.checkPromotionText("不少于数量1，全场九折", "HK$ 81");
    await shoppingCart.checkPromotionText("买满相等于数量1指定商品以折实价10%折扣", "HK$ 81");
    await onlineStore.search.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.searchInput.fill("滑板鞋");
    await onlineStore.searchConfirm.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.sizeFirstOption.click();
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await shoppingCart.checkPromotionText("不少于数量1，全场九折", "HK$ 531");
    await shoppingCart.checkPromotionText("买满相等于数量1指定商品以折实价10%折扣", "HK$ 531");
    await shoppingCart.goCheckOut.click();
    await onlineStore.page.waitForTimeout(3000);
    await onlineStore.verifyGrandTotal("531");
    await onlineStore.shoppingCart.click();
    await shoppingCart.deleteCartBtn.click();
    await onlineStore.page.waitForTimeout(3000);

  });

});
