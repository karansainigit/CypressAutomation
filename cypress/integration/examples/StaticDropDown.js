/// <reference types="Cypress" />

describe ('My Static Drop Down test suite', function() {

    it ('My Static Drop Down test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
    })
})