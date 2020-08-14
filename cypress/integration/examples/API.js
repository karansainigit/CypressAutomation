/// <reference types="Cypress" />

describe ('My API test suite', function() {

    it ('My API test case', function() {

        cy.request('POST','http://216.10.245.166/Library/Addbook.php', {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcdkayfdsjq",
            "aisle":"22745",
            "author":"Karan Saini"
            }).then(function(response) {
                expect(response.body).to.have.property('Msg','successfully added')
                expect(response.status).to.equal(200)
            })
    })
})