import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';

test.describe('Login page', () => {
    test('Login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('/login');
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
        await expect(await loginPage.getSuccessMessageElement()).toBeVisible();
        await expect(await loginPage.getSuccessMessage()).toContain('You logged into a secure area!');
    });

    test('Login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate('/login');
        await loginPage.login('invalidUser', 'invalidPass');
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Your username is invalid!');
    });


})

