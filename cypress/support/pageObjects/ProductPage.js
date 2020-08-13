class ProductPage {

    getCheckoutLink() {
        return cy.get("a.nav-link.btn.btn-primary")
    }
}

export default ProductPage