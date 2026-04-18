import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "./world";

Given('I am logged in as {string} user', async function(this: CustomWorld, user: string) {
    await this.page!.goto('https://www.saucedemo.com');
    await this.page!.locator('#user-name').fill(user);
    await this.page!.locator('#password').fill('secret_sauce');
    await this.page!.locator('#login-button').click();
});

Given('I am on the {string} page', async function(this: CustomWorld, pageName: string) {
    await expect(this.page!.getByText(pageName)).toBeVisible();
});

When('I logout from the products page', async function (this: CustomWorld) {
    await this.page!.locator('#react-burger-menu-btn').click();
    await this.page!.locator('#logout_sidebar_link').click();
});

Then('I will be redirected to the login page', async function (this: CustomWorld) {
    await expect(this.page!.locator('#login-button')).toBeVisible();
    await expect(this.page!).toHaveURL('https://www.saucedemo.com/');
})