/// <reference types="Cypress" />

describe ('My XHR API test suite', function() {

    it ('My XHR API test case', function() {

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.server()

        cy.route('GET','comments/*').as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('status').should('eq',200)

        cy.route('POST','/comments').as('postComment')
        cy.get('.network-post').click()
        cy.wait('@postComment').its('status').should('eq',201)

        cy.route( {
            method: 'PUT',
            url: 'comments/*',
            status: 404,
            response: {error: "Hey Comment donot exist"},
            delay: 500
        }).as('putComment')

        cy.get('.network-put').click()
        cy.wait('@putComment')
        cy.get('.network-put-comment').should('contain','donot exist')
    })
})