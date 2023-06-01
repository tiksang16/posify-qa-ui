import { Page, test, expect } from "@playwright/test";
import posifyLoginPage from "../../pages/CMS/login.page";
// import ENV from "../../../utilities/env";

let loginPage: posifyLoginPage;
test.describe("Login ", () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext({});
    const page = await context.newPage();
    loginPage = new posifyLoginPage(page);
  });

//   test("Login - Invalid credential", async () => {
//     await loginPage.invalidLogin("Testing123", "InvalidPassWord");

//     // Verify that the user is still on the login page. Note that the url is not the same as before
//     expect(loginPage.page.url()).toContain("?cmse=1");
//   });
  test("Login - Valid credential", async () => {
    await loginPage.login("Staff", "102938");

    //Verify that the user is navigated to the home page after logging in
    expect(loginPage.page.url()).toContain("https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=agent%2Findex");
  });
});
