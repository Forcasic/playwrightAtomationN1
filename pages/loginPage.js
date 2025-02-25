import { BasePage } from './basePage.js';
import { test } from '@playwright/test';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.locator('#flash.error');
        this.successMessage = page.locator('#flash.success');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return this.errorMessage.textContent();
    }
    async getSuccessMessage() {
        return this.successMessage.textContent();
    }
    async getSuccessMessageElement() {
        return await this.successMessage;

    }
}
