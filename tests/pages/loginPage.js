import { BasePage } from './basePage..js';
import { test } from '@playwright/test';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = 'button[type="submit"]';
        this.errorMessage = '#flash.error';
        this.successMessage = '#flash.success';
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        return this.page.textContent(this.errorMessage);
    }
    async getSuccessMessageElement() {
        return await this.page.locator(this.successMessage).first();

    }
}
