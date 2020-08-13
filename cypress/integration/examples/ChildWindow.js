/// <reference types="Cypress" />

describe ('My Child Window test suite', function() {

    it ('My Child Window test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
    })
})