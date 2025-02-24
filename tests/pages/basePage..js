export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async getTitle() {
        return this.page.title();
    }
}
