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

  test("MKT/PROMO/5.2.2.1/1 - 推广规则：买满不少于数量3就可以享受100的固定折扣，实际买3减100", async () => {
    await marketingPage.activatePromotion("买满不少于数量3减100");

    await onlineStore.page.goto('https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#');
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
    await shoppingCart.checkPromotionText("买满不少于数量3减100", "HK$ 2900");
    await shoppingCart.goCheckOut.click();
    await onlineStore.page.waitForTimeout(3000);
    await onlineStore.verifyGrandTotal("2900");
    await onlineStore.shoppingCart.click();
    await shoppingCart.deleteCartBtn.click();
    await onlineStore.page.waitForTimeout(3000);

  });

  test("MKT/PROMO/5.2.2.1/2 - 推广规则：买满不少于数量3就可以享受100的固定折扣，实际买4减100", async () => {
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
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await shoppingCart.checkPromotionText("买满不少于数量3减100", "HK$ 3900");
    await shoppingCart.goCheckOut.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.verifyGrandTotal("3900");
    await onlineStore.shoppingCart.click();
    await shoppingCart.deleteCartBtn.click();
    await onlineStore.page.waitForTimeout(3000);
  });

  test("MKT/PROMO/5.2.2.1/3 - 推广规则：买满不少于数量3就可以享受100的固定折扣，实际买6减100", async () => {
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
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await shoppingCart.checkPromotionText("买满不少于数量3减100", "HK$ 5900");
    await shoppingCart.touchspinDown.click();
    await shoppingCart.touchspinDown.click();
    await onlineStore.page.waitForTimeout(2000);
    expect(shoppingCart.totalPrice).toContainText("HK$ 5900");
    await shoppingCart.goCheckOut.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.verifyGrandTotal("5900");
    await onlineStore.shoppingCart.click();
    await shoppingCart.deleteCartBtn.click();
    await onlineStore.page.waitForTimeout(3000);
  });

test("MKT/PROMO/5.2.2.1/4 - 购物车内删除商品数量来触发promotion变动", async () => {
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
      await shoppingCart.touchspinUp.click();
      await shoppingCart.touchspinUp.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.addToCartBtn.click();
      await onlineStore.page.waitForTimeout(2000);
      expect(shoppingCart.totalPrice).toContainText("HK$ 2900");
      await onlineStore.page.waitForTimeout(2000);
      await shoppingCart.checkPromotionText("买满不少于数量3减100", "HK$ 2900");
      await onlineStore.page.waitForTimeout(2000);
      await shoppingCart.touchspinDown.click();
      await onlineStore.page.waitForTimeout(2000);
      expect(shoppingCart.totalPrice).toContainText("HK$ 2000");
      await shoppingCart.goCheckOut.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.verifyGrandTotal("2000");
      await onlineStore.shoppingCart.click();
      await shoppingCart.deleteCartBtn.click();
      await onlineStore.page.waitForTimeout(3000);
    });

    test("MKT/PROMO/5.2.2.1/5 - 购物车内加减商品数量来触发promotion变动", async () => {
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
      await onlineStore.addToCartBtn.click();
      await onlineStore.page.waitForTimeout(2000);
      expect(shoppingCart.totalPrice).toContainText("HK$ 1000");
      await shoppingCart.touchspinUp.click();
      await shoppingCart.touchspinUp.click();
      await onlineStore.page.waitForTimeout(2000);
      await shoppingCart.checkPromotionText("买满不少于数量3减100", "HK$ 2900");
      await shoppingCart.touchspinUp.click();
      await onlineStore.page.waitForTimeout(2000);
      await shoppingCart.checkPromotionText("买满不少于数量3减100", "HK$ 3900");
      await onlineStore.page.waitForTimeout(2000);
      await shoppingCart.quanitySniper.fill("1");
      await onlineStore.page.waitForTimeout(2000);
      expect(shoppingCart.totalPrice).toContainText("HK$ 1000");
      await shoppingCart.goCheckOut.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.verifyGrandTotal("1000");
      await onlineStore.shoppingCart.click();
      await shoppingCart.deleteCartBtn.click();
      await onlineStore.page.waitForTimeout(3000);
    });

    // test("MKT/PROMO/5.2.2.1/6 - 推广规则：买女子针织长裤不少于金额100，固定折扣1000", async () => {
    //   await onlineStore.page.goto(
    //     "https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#"
    //   );
    //   await onlineStore.page.waitForTimeout(2000);
    //   await onlineStore.checkIfLangbtnforHKisVisible();
    //   await onlineStore.search.click();
    //   await onlineStore.page.waitForTimeout(2000);
    //   await onlineStore.searchInput.fill("女子针织长裤");
    //   await onlineStore.searchConfirm.click();
    //   await onlineStore.page.waitForTimeout(9000);
    //   await onlineStore.sizeFirstOption.click();
    //   await onlineStore.page.waitForTimeout(2000);
    //   await onlineStore.addToCartBtn.click();
    //   await onlineStore.page.waitForTimeout(2000);
    //   await shoppingCart.checkPromotionText("女子针织长裤满$100, 减$1,000", "HK$ 0");
    //   await onlineStore.page.waitForTimeout(2000);
    //   await shoppingCart.goCheckOut.click();
    //   await onlineStore.page.waitForTimeout(2000);
    //   await onlineStore.verifyGrandTotal("0");
    //   await onlineStore.shoppingCart.click();
    //   await shoppingCart.deleteCartBtn.click();
    //   await onlineStore.page.waitForTimeout(3000);
    // });

    test("MKT/PROMO/5.2.2.1/6 - 推广规则：买女子针织长裤不少于数量2件，固定折扣1000，实际买2件女子针织长裤，2件“联名款板鞋”", async () => {
      await marketingPage.activatePromotion("买女子针织长裤不少于数量2件，固定折扣1000");

      await onlineStore.page.goto(
        "https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#"
      );
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.checkIfLangbtnforHKisVisible();
      await onlineStore.search.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.searchInput.fill("女子针织长裤");
      await onlineStore.searchConfirm.click();
      await onlineStore.page.waitForTimeout(9000);
      await onlineStore.sizeFirstOption.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.quantityTouchspinUp.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.addToCartBtn.click();
      await onlineStore.page.waitForTimeout(3000);
      await shoppingCart.checkPromotionText("买女子针织长裤不少于数量2件，固定折扣1000", "HK$ 0");
      await onlineStore.page.waitForTimeout(2000);
      await shoppingCart.closeCartBtn.click();
      await onlineStore.search.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.searchInput.fill("聯名款板鞋");
      await onlineStore.searchConfirm.click();
      await onlineStore.page.waitForTimeout(9000);
      await onlineStore.sizeFirstOption.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.quantityTouchspinUp.click();
      await onlineStore.addToCartBtn.click();
      await onlineStore.page.waitForTimeout(3000);
    //   await shoppingCart.checkPromotionTextNotVisible("买满2000减100", "HK$ 1000");
      await expect.soft(shoppingCart.totalPrice).toContainText("HK$ 2000");
      await expect.soft(shoppingCart.page.locator('xpath=//div[@class="item-promotion"]/div[contains(@class, "title") and contains(text(), "购买3件商品, 减$100")]')).toBeHidden();
    //   await shoppingCart.checkPromotionText("女子针织长裤满$100, 减$1,000", "HK$ 1000");
      await expect.soft(shoppingCart.totalPrice).toContainText("HK$ 2000");
      await expect.soft(shoppingCart.page.locator('xpath=//div[@class="item-promotion"]/div[contains(@class, "title") and contains(text(), "买女子针织长裤不少于数量2件，固定折扣1000")]')).toBeVisible();
      await shoppingCart.goCheckOut.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.verifyGrandTotal("2000");
      await onlineStore.shoppingCart.click();
      await shoppingCart.deleteCartBtn.click();
      await onlineStore.page.waitForTimeout(2000);
      await shoppingCart.deleteCartBtn.click();
      await onlineStore.page.waitForTimeout(3000);
    });

    test("MKT/PROMO/5.2.2.1/7 - 推广规则：买女子针织长裤不少于数量2件，固定折扣1000，实际买20件女子针织长裤", async () => {
      await onlineStore.page.goto(
        "https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#"
      );
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.checkIfLangbtnforHKisVisible();
      await onlineStore.search.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.searchInput.fill("女子针织长裤");
      await onlineStore.searchConfirm.click();
      await onlineStore.page.waitForTimeout(9000);
      await onlineStore.sizeFirstOption.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.addToCartBtn.click();
      await onlineStore.page.waitForTimeout(3000);
      await shoppingCart.quanitySniper.fill("20");
      await onlineStore.page.waitForTimeout(2000);
      await expect.soft(shoppingCart.totalPrice).toContainText("HK$ 1000");
      await expect.soft(shoppingCart.page.locator('xpath=//div[@class="item-promotion"]/div[contains(@class, "title") and contains(text(), "购买3件商品, 减$100")]')).toBeHidden();
      await expect.soft(shoppingCart.page.locator('xpath=//div[@class="item-promotion"]/div[contains(@class, "title") and contains(text(), "买女子针织长裤不少于数量2件，固定折扣1000")]')).toBeVisible();
      await shoppingCart.goCheckOut.click();
      await onlineStore.page.waitForTimeout(2000);
      await onlineStore.verifyGrandTotal("1000");
      await onlineStore.shoppingCart.click();
      await shoppingCart.deleteCartBtn.click();
      await onlineStore.page.waitForTimeout(2000);

      await marketingPage.deactivatePromotion("买女子针织长裤不少于数量2件，固定折扣1000");
      await marketingPage.deactivatePromotion("买满不少于数量3减100");
    });
  

});
