import { test, expect, Page } from '@playwright/test';

test.describe('TC-001', async() => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test('POS - 標籤表格', async () => {
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
    //select 標籤表格
    await page.locator("xpath=/html/body/div[6]/div/div[1]/div/form/div/div/div/div[2]/div/div/div[1]/img").click();
    //Save
    await page.locator("xpath=/html/body/div[6]/div/div[1]/div/form/div/div/div/div[1]/button").click();
  });
  
  test('Online Store - 標籤表格', async ()=> {
    await page.goto('https://web21.posify.me/posifyautotest@7.3.01.2203.0724/');
    //在搜尋輸入商品A
    await page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul[1]/li/div/div/input').fill("Tik's Testing");
    //Click Search
    await page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul[1]/li/div/div/span/button/i').click();
    //Add to cart
    await page.waitForSelector('xpath=/html/body/div[2]/div[1]/div[4]/div[2]/div[2]/div[1]/div/div[2]/div/div[5]/div[2]/div[2]/button/span');
    await page.waitForTimeout(3000);
    await page.locator('xpath=/html/body/div[2]/div[1]/div[4]/div[2]/div[2]/div[1]/div/div[2]/div/div[5]/div[2]/div[2]/button/span').click();
    //Go to checkout
    await page.locator("xpath=/html/body/div[25]/div[4]/div[2]/button").click();
    await page.waitForTimeout(5000);
    //Assertion
    await expect(page.getByText('會員登入')).toBeVisible();
    await expect(page.getByRole('button', { name: '登入' })).toBeVisible();
    await expect(page.getByText('會員註冊')).toBeVisible();
    await expect(page.getByRole('link', { name: '訪客' })).toBeVisible();

    //input email to login
    await page.locator('xpath=/html/body/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form/div[1]/input').fill('tik@posify.me');
    //input password to login
    await page.locator('xpath=/html/body/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form/div[2]/div/input').fill('test12345678');
    //click login button
    await page.waitForSelector('xpath=/html/body/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form/button');
    await page.locator('xpath=/html/body/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form/button').click()
    await page.waitForTimeout(5000);
    
    //Assertion
    await page.waitForSelector('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form')
    await expect(page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form')).toBeVisible();

    //Click cart
    await page.waitForSelector('xpath=/html/body/div[1]/header/div/div[1]/ul[2]/li[1]/a/span');
    await page.locator('xpath=/html/body/div[1]/header/div/div[1]/ul[2]/li[1]/a/span').click();
    //Assertion
    await expect(page.locator('xpath=/html/body/div[25]/div[3]/div[2]/div[3]')).toHaveText("Tik's Testing");
    await page.locator("xpath=/html/body/div[25]/div[1]/a/i").click();
    await page.waitForTimeout(3000);

    //input first name
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[2]/div[2]/div[3]/div[1]/div[1]/input').fill('Tik Sang');
    //input last name
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[2]/div[2]/div[3]/div[1]/div[2]/input').fill('Chan')

    //address 地方
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[2]/div[2]/div[3]/div[2]/div[2]/span/span[1]/span/span[1]').click();
    await page.locator('xpath=/html/body/span/span/span[2]/ul/li[2]').click();
    //address 地區
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[2]/div[2]/div[3]/div[2]/div[3]/span/span[1]/span/span[1]').click();
    await page.locator('xpath=/html/body/span/span/span[2]/ul/li[2]').click();
    //地址 1
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[2]/div[2]/div[3]/div[2]/div[5]/input').fill('testing address');
    await page.waitForTimeout(3000);
    //shipping next button
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[3]/div/div[8]/div[2]/button').click();
    //Assertion
    const loc = page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/ul/li[2]/a');
    await expect(loc).toHaveAttribute('aria-expanded', 'true');
    await page.waitForTimeout(3000);

    //Click back
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[3]/div/div[9]/div[1]/button').click();
    const loc2 = page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/ul/li[1]/a');
    await expect(loc2).toHaveAttribute('aria-expanded', 'true');
    await page.waitForTimeout(3000);

    //shipping next button
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[3]/div/div[8]/div[2]/button').click();
    //click ATM
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[3]/ul[1]/li[2]/div/ins').click();
    
    //add remark
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[3]/div[2]/div/div/textarea').fill('jaytest');
    await page.waitForTimeout(3000);
    //Shipping next button
    await page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[3]/div/div[9]/div[2]/button').click();

    //assertion
    const loc3 = page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/ul/li[3]/a');
    await expect(loc3).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator('xpath=/html/body/div[2]/div[1]/div/div[3]/div[1]/div/form/div[1]/div/div[4]/div[5]/div/div[1]/div[2]/div[2]/div[2]/a')).toBeVisible();
    await page.waitForTimeout(3000);

    //

  });


});