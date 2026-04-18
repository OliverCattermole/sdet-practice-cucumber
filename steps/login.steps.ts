import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "./world";

Given('I am on the login screen', async function (this: CustomWorld) {
  // await this.page!.goto('https://www.saucedemo.com');
  await this.loginPage!.navigate();
});

When('I login with username {string} and password {string}', async function (this: CustomWorld, user: string, pass: string) {
  // await this.page!.locator('#user-name').fill(user);
  // await this.page!.locator('#password').fill(pass);
  // await this.page!.locator('#login-button').click();  
  await this.loginPage!.login(user, pass);
});

Then('I should see the result {string}', async function (this: CustomWorld, outcome: string) {
  // if (outcome === 'products') {
  //     const header = this.page!.locator('.header_secondary_container');
  //     await expect(header).toBeVisible();
  //     await expect(this.page!.getByText('Products')).toBeVisible();

  // } else if (outcome === 'error_message') {
  //     const error_message = this.page!.locator('.error-message-container.error');
  //     await expect(error_message).toBeVisible();
  //     await expect(this.page!.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
  
  // } else {
  //     const locked_error_message = this.page!.locator('.error-message-container.error');
  //     await expect(locked_error_message).toBeVisible();
  //     await expect(this.page!.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
  // }
  
  switch (outcome) {
    case 'products':
      //await expect(this.page!.locator('.header_secondary_container')).toBeVisible();
      await expect(this.productsPage!.header).toBeVisible();
      await expect(this.page!.getByText('Products')).toBeVisible();
      break;
    case 'error_message':
      const error_message = await this.loginPage!.getErrorMessage();
      await expect(error_message).toBeVisible();  
      await expect(this.page!.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
      break;
    case 'locked_error_message':
      const locked_error_message = await this.loginPage!.getErrorMessage();
      await expect(locked_error_message).toBeVisible();
      await expect(this.page!.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
      break;
    default:
      throw new Error(`Unknown outcome type: ${outcome}`);
  }

});

// When('I login with valid credentials', async function (this: CustomWorld) {
//   await this.page!.locator('#user-name').fill('standard_user');
//   await this.page!.locator('#password').fill('secret_sauce');
//   await this.page!.locator('#login-button').click();
// });

// Then('I should see the products inventory page', async function (this: CustomWorld) {
//   const header = this.page!.locator('.header_secondary_container');
//   await expect(header).toBeVisible();
//   await expect(this.page!.getByText('Products')).toBeVisible();
// });

// When('I login with username {string} and password {string}', async function (this: CustomWorld, user: string, pass: string) {
//   await this.page!.locator('#user-name').fill(user);
//   await this.page!.locator('#password').fill(pass);
//   await this.page!.locator('#login-button').click();  
// });

// Then('I should see an error and remain on login page', async function (this: CustomWorld) {
// //   const error_message = this.page!.locator('.error-message-container.error');
// //   await expect(error_message).toBeVisible();
//   await expect(this.page!.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
// });