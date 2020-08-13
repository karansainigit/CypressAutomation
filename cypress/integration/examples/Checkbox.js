/// <reference types="Cypress" />

describe ('My Check Box test suite', function() {

    it ('My Check Box test case', function() {
        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })
})