import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

export class CustomWorld extends World {
    browser?: Browser;
    context?: BrowserContext;
    page?: Page;
    loginPage?: LoginPage;
    productsPage?: ProductsPage;

    constructor(options: IWorldOptions) {
        super(options);
    }
}

setWorldConstructor(CustomWorld);