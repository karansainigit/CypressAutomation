/// <reference types="Cypress" />

describe ('My first test suite', function() {

    it ('My first test case', function() {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.product:visible').should('have.length',4)

        cy.get('.products').as('ProductLocator')

        cy.get('@ProductLocator').find('.product').should('have.length',4)

        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1, index, $list) => {

            const productName = $e1.find('h4.product-name').text()
            if(productName.includes('Cashews')) {

                $e1.find('button').click()
            }

        })

        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.brand').then(function(logoElement) {

            cy.log(logoElement.text())
        })
    })
})