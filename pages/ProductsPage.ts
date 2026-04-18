import { Page, Locator } from "@playwright/test";

export class ProductsPage {
    readonly page: Page;
    readonly header: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('.header_secondary_container');
    }
}