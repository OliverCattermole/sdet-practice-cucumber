import { Page, Locator } from "@playwright/test";

export class LoginPage {
  // use readonly to ensure POM is immutable
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  // Initialisation - set up object
  // Take live browser from world/hooks, assign that page to this.page & pre-define locators
  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return this.page.locator('.error-message-container.error');
  }
}