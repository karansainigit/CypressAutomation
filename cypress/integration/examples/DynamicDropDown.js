/// <reference types="Cypress" />

describe ('My Dynamic Drop Down test suite', function() {

    it ('My Dynamic Drop Down test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').find('div').each(($e1, index, $list) => {

            if($e1.text() === 'India') {
                $e1.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')
    })
})