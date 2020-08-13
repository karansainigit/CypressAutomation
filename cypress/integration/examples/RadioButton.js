/// <reference types="Cypress" />

describe ('My Radio Button test suite', function() {

    it ('My Radio Button test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[value="radio1"]').check().should('be.checked').and('have.value','radio1')
        
    })
})