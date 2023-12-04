//Homepage class
class Homepage {

    URL = "http://automationpractice.com/index.php"
    title = "My Store"
    successIcon = ".icon-ok"
    successMessage = "h2*=Product"


    async open() {
        await browser.url(this.URL)
    }

    async assertTitle() {
        const title = await browser.getTitle()
        expect(title).toBe(this.title)
    }

    async getNthItem(item) {
        return (`[data-id-product='${item}']`)
    }

    async addItem(n) {
        const item = await this.getNthItem(n)
        await $(item).click()
    }

    async verifyItemAddedToBasket() {
        await browser.pause(3000)
        const text = "Product successfully added to your shopping cart"
        const icon = await $(this.successIcon)
        const successMessage = await $(this.successMessage)
        const successMessageText = await successMessage.getText()

        expect(icon).toBeDisplayed()
        expect(successMessage).toBeDisabled()
        expect(successMessageText).toEqual(text)
    }
}

module.exports = new Homepage()