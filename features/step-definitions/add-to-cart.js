const { Given, When, Then } = require('@wdio/cucumber-framework')
const home = require('../pages/home.js')

Given("I am on the homepage", async () => {
    await home.open()
    await home.assertTitle()
})

When("I click Add to cart", async () => {
    await home.addItem(2)
})

Then("The item is added to my cart", async () => {
    await home.verifyItemAddedToBasket()
})
