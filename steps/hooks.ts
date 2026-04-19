import { Before, After } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./world";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: process.env.CI ? true : false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.loginPage = new LoginPage(this.page);
    this.productsPage = new ProductsPage(this.page);
});

After(async function (this : CustomWorld) {
    // If this.page exists, call .close(). If is is null or undefined, skip this line
    await this.page?.close();
});