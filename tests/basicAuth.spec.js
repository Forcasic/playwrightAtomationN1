import { test, expect } from '@playwright/test';

test('Basic Auth login', async ({ page }) => {
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    const message = await page.locator('p').textContent();
    expect(message).toContain('Congratulations');
});
