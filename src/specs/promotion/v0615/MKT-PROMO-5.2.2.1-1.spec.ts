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

  test("MKT/PROMO/5.2.2.1/1 - 推广规则：相等于数量3就可以全单，以原价享有20%的折扣", async () => {
    await onlineStore.page.goto(
      "https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=customer%2Fmanage-client"
    );
    await loginPage.userName.fill("posifyadmin");
    await loginPage.nextBtn.click();
    await loginPage.password.fill("102938");
    await loginPage.loginBtn.click();
    await loginPage.page.waitForTimeout(5000);
    await loginPage.page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[10]/a/span').click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page.getByRole("link", { name: "推广优惠" }).click();
    await loginPage.page.waitForTimeout(2000);
    await marketingPage.addPromotion.click();
    await loginPage.page.waitForTimeout(2000);
    await marketingPage.page.locator("xpath=//div[(@data-template-id='PRICE_DISCOUNT_TEMPLATE_3')]").click();
    await loginPage.page.waitForTimeout(2000);
    await marketingPage.page.getByRole('link', { name: 'English' }).click();
    await marketingPage.page.locator('#promotion_name_en_us').fill("买满相等于数量3全单以零售价20%折扣")
    await marketingPage.page.getByRole('link', { name: '繁體中文' }).click();
    await marketingPage.page.locator('#promotion_name_zh_hk').fill("买满相等于数量3全单以零售价20%折扣")
    await marketingPage.page.getByRole('link', { name: '简体中文' }).click();
    await marketingPage.page.locator('#promotion_name_zh_cn').fill("买满相等于数量3全单以零售价20%折扣")
    await marketingPage.page.locator('#trigger_category_qty').fill("3");
    await marketingPage.page.locator('#discount_rate').fill("20");
    await marketingPage.advanceSetting.click();
    await marketingPage.page.getByRole('link', { name: '规则' }).click();
    await loginPage.page.waitForTimeout(2000);
    await marketingPage.page.locator('#percent_apply_price_type_tier1').selectOption('零售价');
    await loginPage.page.waitForTimeout(2000);
    await marketingPage.saveBtn.click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page.locator("xpath=//img[@src='/atpromotiontest@7.3.01.2203.0905w/images/no-user.png']").nth(0).click();
    await loginPage.page.getByText("登出").nth(0).click();
    await loginPage.page.waitForTimeout(2000);


    await onlineStore.page.goto('https://web21.posify.me/atpromotiontest@7.3.01.2203.0905w/?lang=ZH_HK#');
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.checkIfLangbtnforHKisVisible();
    await onlineStore.search.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.searchInput.fill("男款中袜");
    await onlineStore.searchConfirm.click();
    await onlineStore.page.waitForTimeout(9000);
    await onlineStore.sizeFirstOption.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await shoppingCart.checkPromotionText("购买3件商品, 全单20%折扣", "HK$ 240");
    await shoppingCart.deleteCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.shoppingCart.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.quantityTouchspinUp.click();
    await onlineStore.page.waitForTimeout(2000);
    await onlineStore.addToCartBtn.click();
    await onlineStore.page.waitForTimeout(2000);
    await shoppingCart.checkPromotionText("购买3件商品, 全单20%折扣", "HK$ 480");
    await shoppingCart.goCheckOut.click();
    await onlineStore.page.waitForTimeout(3000);
    await onlineStore.verifyGrandTotal("480");
    await onlineStore.shoppingCart.click();
    await shoppingCart.deleteCartBtn.click();
    await onlineStore.page.waitForTimeout(3000);


    await onlineStore.page.goto(
      "https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=customer%2Fmanage-client"
    );
    await loginPage.userName.fill("posifyadmin");
    await loginPage.nextBtn.click();
    await loginPage.password.fill("102938");
    await loginPage.loginBtn.click();
    await loginPage.page.waitForTimeout(5000);
    await loginPage.page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[10]/a/span').click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page.getByRole("link", { name: "推广优惠" }).click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page.locator("xpath=//button[@data-category='promotion']").nth(1).click();
    await loginPage.page.waitForTimeout(3000);
    await loginPage.page.getByRole('button', { name: '是' }).click();
    await loginPage.page.waitForTimeout(2000);
    await loginPage.page.locator("xpath=//img[@src='/atpromotiontest@7.3.01.2203.0905w/images/no-user.png']").nth(0).click();
    await loginPage.page.getByText("登出").nth(0).click();
    await loginPage.page.waitForTimeout(2000);


  });

});
