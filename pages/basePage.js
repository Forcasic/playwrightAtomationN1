export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(path = '') {
        await this.page.goto(`https://the-internet.herokuapp.com/${path}`);
    }

    async getTitle() {
        return this.page.title();
    }

    async takeScreenshot(name) {
        await this.page.screenshot({ path: `screenshots/${name}.png` });
    }
}
