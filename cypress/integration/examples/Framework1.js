/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'

describe ('My Framework test suite', function() {

    before(function() {

        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })

    it ('My Framework test case', function() {

        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()

        cy.visit(Cypress.env('url'))
        homePage.getNameEditBox().type(this.data.name)
        homePage.getGenderDropDown().select(this.data.gender)
        
        homePage.getTwoWayData().should('have.value', this.data.name)
        homePage.getNameEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneurRadioButton().should('be.disabled')

        //cy.pause()
        homePage.getShopLink().click()

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        })
        productPage.getCheckoutLink().click()
        var sum = 0
        checkoutPage.getProductPrices().each(($e1, index, $list) => {
            const actualText = $e1.text()
            var result = actualText.split(" ")
            result = result[1].trim()
            sum = Number(sum) + Number(result)
            cy.log(result)
        }).then(function() {
            cy.log(sum)
        })
        checkoutPage.getTotalPrice().then(function (element) {
            const price = element.text()
            var result = price.split(" ")
            var totalPrice = result[1].trim()
            expect(sum).to.equal(Number(totalPrice))
        })
        checkoutPage.getCheckoutButton().click()
        checkoutPage.getDeliveryCountry().type('India')
        checkoutPage.getCountrySuggestions().click()
        checkoutPage.getDeliveryCountry().should('have.value','India')
        checkoutPage.getAgreeCheckBox().check({force: true}).should('be.checked')
        checkoutPage.getPurchaseButton().click()
        checkoutPage.getSuccessAlert().should('be.visible')
        checkoutPage.getSuccessAlert().then(function(element) {
            const actual = element.text()
            expect(actual.includes('Success')).to.be.true
        })
    })
})