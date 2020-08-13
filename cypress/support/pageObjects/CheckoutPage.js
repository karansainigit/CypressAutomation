class CheckoutPage {

    getCheckoutButton() {
        return cy.get("button.btn.btn-success")
    }

    getDeliveryCountry() {
        return cy.get('#country')
    }

    getCountrySuggestions() {
        return cy.get('.suggestions')
    }

    getAgreeCheckBox() {
        return cy.get('#checkbox2')
    }

    getPurchaseButton() {
        return cy.get("input[type='submit']")
    }

    getSuccessAlert() {
        return cy.get('.alert.alert-success')
    }

    getProductPrices() {
        return cy.get('.table tbody tr td:nth-child(4) strong')
    }

    getTotalPrice() {
        return cy.get('h3 strong')
    }
}

export default CheckoutPage