class HomePage {

    getNameEditBox() {
        return cy.get(".form-group input[name='name']")
    }

    getGenderDropDown() {
        return cy.get('#exampleFormControlSelect1')
    }

    getTwoWayData() {
        return cy.get("h4 input[name='name']")
    }

    getEntrepreneurRadioButton() {
        return cy.get('#inlineRadio3')
    }

    getShopLink() {
        return cy.get("[href*='shop']")
    }
}

export default HomePage