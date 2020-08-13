/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe ('My Frame test suite', function() {

    it ('My Frame test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("[class*='pricing-title']").should('have.length',2)
    })
})