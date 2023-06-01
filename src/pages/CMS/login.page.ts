import { expect, Locator, Page } from "@playwright/test";
// import ENV from "../../../utilities/env";

export default class posifyLoginPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly nextBtn: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly signOutBtn: Locator;
    readonly homeBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator("xpath=//input[(@name='login')]");
        this.nextBtn = page.locator("xpath=//button[(@id='btn_next_step')]");
        this.password = page.locator("xpath=//input[(@name='password')]");
        this.loginBtn = page.locator('xpath=//button[contains(@class, "btn btn-primary btn-block")]').nth(2);
        this.signOutBtn = page.locator('xpath=//span[text()="登出"]');
        this.homeBtn = page.locator("xpath=//a[(@id='home-button')]");
    }

    public async login(username: string, password: string) {
        // Navigate to the login page
        await this.page.goto('https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=agent%2Flogin');
        await this.nextBtn.waitFor({ state: "visible" });

        // Enter valid credentials and submit the form
        await this.userName.fill(username);
        await this.nextBtn.click();
        await this.loginBtn.waitFor({ state: "visible" });

        await this.password.fill(password);
        await this.loginBtn.click();
        await this.page.waitForTimeout(5000);
    }

    public async invalidLogin(username: string, password: string) {
        // Intercept the alert prompt and accept it
        this.page.on("dialog", async (dialog) => {
            console.log(dialog.message());
            await dialog.accept();
        });

        // Navigate to the login page
        await this.page.goto('https://cms21.posify.me/atpromotiontest@7.3.01.2203.0905w/index.php?r=agent%2Flogin');
        await this.page.waitForTimeout(500);
        await this.loginBtn.waitFor({ state: "visible" });

        // Enter invalid credentials and submit the form
        await this.userName.fill('Testing123');
        await this.password.fill('Testing123');
        await this.loginBtn.click();
        await this.page.waitForTimeout(1000);

        // Wait for the alert to appear and accept it
        await this.page.waitForLoadState();
    }
}
