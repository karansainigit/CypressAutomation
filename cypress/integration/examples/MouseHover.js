/// <reference types="Cypress" />

describe ('My Web Tables test suite', function() {

    it ('My Web Tables test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('.mouse-hover-content').invoke('show')
        //cy.contains('Top').click()

        cy.contains('Top').click({force : true})

        cy.url().should('include','top')
    })
})