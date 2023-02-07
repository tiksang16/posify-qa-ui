import { test, expect, Page } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//   await page.goto('https://cms21.posify.me/posifyautotest@7.3.01.2203.0724/index.php?r=agent%2Flogin');
//   await page.getByPlaceholder('登入名稱').fill('posifyautotest');
//   await page.getByRole('button', { name: '下一步' }).click();
//   await page.getByPlaceholder('密碼', { exact: true }).fill('posifyautotest');
//   await page.getByRole('button', { name: '登入' }).click();

// });
// test.describe('test', async () =>{
//   let page: Page;
//   test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
//   });
//   test('去网上商店>网站导航>内嵌页面>结账>页面下，点击齿轮按钮，选择一頁直式表格结账，点击保存', async () => {
//   await page.goto('https://cms21.posify.me/posifyautotest@7.3.01.2203.0724/index.php?r=agent%2Flogin');
//   await page.getByPlaceholder('登入名稱').fill('posifyautotest');
//   await page.getByRole('button', { name: '下一步' }).click();
//   await page.getByPlaceholder('密碼', { exact: true }).fill('posifyautotest');
//   await page.getByRole('button', { name: '登入' }).click();
//   //線上商店
//   await page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/a/span').click();
//   //網站導航
//   await page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/ul/li[4]/a/p').click();
//   //結賬
//   await page.waitForTimeout(5000);
//   await page.locator('xpath=/html/body/div[1]/div/section[2]/div/div[2]/div[2]/div[2]/ul/li[4]/div/button/i').click();
  
//   await page.waitForTimeout(5000);
//   //Hover the page builder body
//   await page.locator('xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]').hover();
//   //Click the setting button to open the 結帳頁面樣式
//   await page.waitForSelector('xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]/span/button[2]/i');
//   await expect(page.locator("xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]/span/button[2]/i")).toBeVisible;
//   await page.locator("xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]/span/button[2]/i").click();
//   //select 一頁直式表格
//   await page.locator("xpath=/html/body/div[6]/div/div[1]/div/form/div/div/div/div[2]/div/div/div[2]/img").click();
//   //Save
//   await page.locator("xpath=/html/body/div[6]/div/div[1]/div/form/div/div/div/div[1]/button").click();
  
// });

// test('在online store 购物车已添加商品A，点击前往结算', async() => {
//   await page.goto('https://web21.posify.me/posifyautotest@7.3.01.2203.0724/');
//   //在搜尋輸入商品A
//   await page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul[1]/li/div/div/input').fill("Tik's Testing");
//   //Click Search
//   await page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul[1]/li/div/div/span/button/i').click();
//   //Add to cart
//   await page.locator('xpath=/html/body/div[2]/div[1]/div[4]/div[2]/div[2]/div[1]/div/div[2]/div/div[5]/div[2]/div[2]/button/span').click();
//   //Go to checkout
//   await page.locator("xpath=/html/body/div[25]/div[4]/div[2]/button").click();
//   //Assertion
//   await expect(page.locator("xpath=/html/body/div[2]/div[1]/div/div[3]/div[2]/p[3]/a[1]")).toBeVisible;
//   await expect(page.locator("xpath=/html/body/div[2]/div[1]/div/div[3]/div[2]/p[3]/a[2]")).toBeVisible;
//   await page.waitForTimeout(5000);
//   await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[2]/p[2]/a[2]').click();
//   await page.waitForTimeout(5000);
//   const rando = Math.random().toString(36).substring(2, 7);
//   //input phone number
//   await page.locator("xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[1]/div/div/div/div/input").fill('12345678');
//   //input random email
//   await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[2]/div/div/div/input').fill(`${rando}@gmail.com`);
//   //input name
//   await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[3]/div/div/div/input').fill(`${rando}`);
//   //tick agreement
//   await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[4]/div/div/label/div[1]/div/ins').click();
//   //input password
//   await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[5]/div[1]/div/div/input').fill(`${rando}`);
//   //input password for second time
//   await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[5]/div[2]/div/div/input').fill(`${rando}`);
//   //select birthday
//   await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[6]/div/div/div/input').click()
//   //select the first of the month
//   await page.locator('xpath=/html/body/div[28]/div[1]/table/tbody/tr[1]/td[4]').click();
// });


test.describe('TC-001', async() => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test('POS', async () => {
    await page.goto('https://cms21.posify.me/posifyautotest@7.3.01.2203.0724/index.php?r=agent%2Flogin');
    await page.getByPlaceholder('登入名稱').fill('posifyautotest');
    await page.getByRole('button', { name: '下一步' }).click();
    await page.getByPlaceholder('密碼', { exact: true }).fill('posifyautotest');
    await page.getByRole('button', { name: '登入' }).click();
    //線上商店
    await page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/a/span').click();
    //網站導航
    await page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/ul/li[4]/a/p').click();
    //結賬
    await page.waitForTimeout(5000);
    await page.locator('xpath=/html/body/div[1]/div/section[2]/div/div[2]/div[2]/div[2]/ul/li[4]/div/button/i').click();
    
    await page.waitForTimeout(5000);
    //Hover the page builder body
    await page.locator('xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]').hover();
    //Click the setting button to open the 結帳頁面樣式
    await page.waitForSelector('xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]/span/button[2]/i');
    await expect(page.locator("xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]/span/button[2]/i")).toBeVisible;
    await page.locator("xpath=/html/body/div[5]/div/div[1]/div/div[3]/div[4]/div[4]/span/button[2]/i").click();
    //select 一頁直式表格
    await page.locator("xpath=/html/body/div[6]/div/div[1]/div/form/div/div/div/div[2]/div/div/div[2]/img").click();
    //Save
    await page.locator("xpath=/html/body/div[6]/div/div[1]/div/form/div/div/div/div[1]/button").click();
  });

  test('Online Store', async ()=> {
    await page.goto('https://web21.posify.me/posifyautotest@7.3.01.2203.0724/');
    //在搜尋輸入商品A
    await page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul[1]/li/div/div/input').fill("Tik's Testing");
    //Click Search
    await page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul[1]/li/div/div/span/button/i').click();
    //Add to cart
    await page.locator('xpath=/html/body/div[2]/div[1]/div[4]/div[2]/div[2]/div[1]/div/div[2]/div/div[5]/div[2]/div[2]/button/span').click();
    //Go to checkout
    await page.locator("xpath=/html/body/div[25]/div[4]/div[2]/button").click();
    //Assertion
    await expect(page.locator("xpath=/html/body/div[2]/div[1]/div/div[3]/div[2]/p[3]/a[1]")).toBeVisible;
    await expect(page.locator("xpath=/html/body/div[2]/div[1]/div/div[3]/div[2]/p[3]/a[2]")).toBeVisible;
    await page.waitForTimeout(5000);
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[2]/p[2]/a[2]').click();
    await page.waitForTimeout(5000);
    const rando = Math.random().toString(36).substring(2, 7);
    //input phone number
    await page.locator("xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[1]/div/div/div/div/input").fill('12345678');
    //input random email
    await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[2]/div/div/div/input').fill(`${rando}@gmail.com`);
    //input name
    await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[3]/div/div/div/input').fill(`${rando}`);
    //tick agreement
    await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[4]/div/div/label/div[1]/div/ins').click();
    //input password
    await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[5]/div[1]/div/div/input').fill(`${rando}`);
    //input password for second time
    await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[5]/div[2]/div/div/input').fill(`${rando}`);
    //select birthday
    await page.locator('xpath=/html/body/div[23]/div/div/div[2]/div[1]/div[1]/div[2]/div[2]/form/div[6]/div/div/div/input').click()
    //select the first of the month
    await page.locator('xpath=/html/body/div[28]/div[1]/table/tbody/tr[1]/td[4]').click();
  });


});

