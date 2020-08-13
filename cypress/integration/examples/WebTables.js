/// <reference types="Cypress" />

describe ('My Web Tables test suite', function() {

    it ('My Web Tables test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#product tr td:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if(text.includes('Python')) {
                cy.get('#product tr td:nth-child(2)').eq(index).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})