import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "./world";

Given('I am logged in as {string}', async function (this: CustomWorld, user: string) {
    await this.page!.goto('https://www.saucedemo.com');
    await this.page!.locator('#user-name').fill(user);
    await this.page!.locator('#password').fill('secret_sauce');
    await this.page!.locator('#login-button').click();
}
);

When('I add the following items to my cart:', async function (this: CustomWorld, table: DataTable) {
    const items = table.raw(); // .raw() returns every single row as an array
    for (const row of items) {
        const itemName = row[0];
        console.log(`Attempting to click: ${itemName}`);
        await this.page!.locator(`//div[text()="${itemName}"]/ancestor::div[@class="inventory_item"]//button`).click();
    }
});

Then('the cart badge should show {string}', async function (this: CustomWorld, expectedValue: string) {
        const cartBadge = await this.page!.locator('[data-test="shopping-cart-badge"]');
        await expect(cartBadge).toHaveText(expectedValue);
});