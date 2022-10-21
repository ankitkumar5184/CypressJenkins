class AddProductCart {

    SEARCH_BAR = "//input[@name='q']";
    SUBMIT_BUTTON = "//button[@type='submit']";
    ADD_TO_CART_BUTTON = "(//button[contains(text(),'Add to cart')])[1]";
    SELECT_ITEM = "//input[@value='2']";
    SHOPPING_CART_BUTTON = "//span[contains(text(),'Shopping cart')]";
    GET_PRICE_TEXT = "(//label[contains(text(),'Price')]//following::span)[1]";
    GET_TOTAL_PRICE_TEXT = "(//label[contains(text(),'Total')]//following::span)[1]";

    goToWebsite(url) {
        cy.visit(url);
        cy.title().should("eq", "nopCommerce demo store");
    }

    searchForProduct(search) {
        // cy.xpath(this.SEARCH_BAR).type(search)
        cy.get("form#small-search-box-form").parent().type(search)
        // cy.xpath(this.SUBMIT_BUTTON).click()
        cy.get("ul#ui-id-1").children().click()
    }

    addProductIntoCart(item_number) {
        cy.xpath(this.ADD_TO_CART_BUTTON).click()
        cy.wait(2000)
        // cy.xpath(this.SELECT_ITEM).clear().type(item_number)
        cy.get("div.add-to-cart-panel").children("#product_enteredQuantity_4").clear({force: true}).type(item_number)
        cy.xpath(this.ADD_TO_CART_BUTTON).click()
    }

    goToShoppingCart() {
        cy.xpath(this.SHOPPING_CART_BUTTON).should('have.text', 'Shopping cart').click()
    }

    verifyTheProductPrice(price) {
        cy.wait(3000)
        cy.xpath(this.GET_PRICE_TEXT).should('have.text', price)
    }
    
    verifyTheProductTotalPrice(total_price) {
        cy.xpath(this.GET_TOTAL_PRICE_TEXT).should('have.text', total_price)
    }
}
export default AddProductCart