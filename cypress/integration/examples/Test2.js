/// <reference types="Cypress" />

describe ('My second test suite', function() {

    it ('My second test case', function() {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.products').as('ProductLocator')

        cy.get('@ProductLocator').find('.product').each(($e1, index, $list) => {

            const productName = $e1.find('h4.product-name').text()
            if(productName.includes('Cashews')) {

                $e1.find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})