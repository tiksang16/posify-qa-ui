import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://cms21.posify.me/posifyautotest@7.3.01.2203.0724/index.php?r=agent%2Flogin');
  await page.getByPlaceholder('登入名稱').fill('posifyautotest');
  await page.getByRole('button', { name: '下一步' }).click();
  await page.getByPlaceholder('密碼', { exact: true }).fill('posifyautotest');
  await page.getByRole('button', { name: '登入' }).click();

});

test('get started link', async ({ page }) => {
  //線上商店
  await page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/a/span').click();
  //網站導航
  await page.locator('xpath=/html/body/div[1]/aside/div[1]/section/ul/li[3]/ul/li[4]/a/p').click();
  //結賬
  await page.locator('xpath=/html/body/div[1]/div/section[2]/div/div[2]/div[2]/div[2]/ul/li[4]/div/button/i').click();
  //
  await page.locator('xpath=/html/body/div[5]/div/div[1]/div/div[2]/button[2]/i"]').click();
  //
  // await page.locator('xpath=//*[@id="tab-0"]/div[2]/div/div/div[2]/img').click()
  // //Save
  // await page.locator('xpath=//*[@id="tab-0"]/div[1]/button').click()
  // await page.locator('').click()


});
