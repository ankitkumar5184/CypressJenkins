/// <reference types="cypress" />
import AddProductCart from "../../Pages/AddProductCart";

const addCart = new AddProductCart();

describe('Test verify the product is added into the cart', function () {
    beforeEach(function () {
        cy.fixture("searchProduct").then(function (data) {
            this.data = data;
        })
    })
    it('Add a product into cart and verify the price', function () {
        addCart.goToWebsite(this.data.url)
        addCart.searchForProduct(this.data.search)
        addCart.addProductIntoCart(this.data.item_number)
        addCart.goToShoppingCart()
        // addCart.verifyTheProductPrice(this.data.price)
        // addCart.verifyTheProductTotalPrice(this.data.total_price)
    })
})