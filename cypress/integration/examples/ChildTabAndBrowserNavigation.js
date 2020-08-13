/// <reference types="Cypress" />

describe ('My Child tab test suite', function() {

    it ('My Child tab test case', function() {

        cy.visit('http://the-internet.herokuapp.com/windows')
        cy.get('a[href*="new"]').invoke('removeAttr','target').click()
        cy.url().should('include','new')
        cy.go('back')
    })
})