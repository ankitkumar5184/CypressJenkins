/// <reference types="cypress" />
import AddProductCart from "../../Pages/AddProductCart";
import CountTotalDesktopsComuter from "../../Pages/CountTotalDesktopsComuter";

const addCart = new AddProductCart();
const countTotalDesktop = new CountTotalDesktopsComuter();

describe('Test verify count total desktops computer', function () {
    beforeEach(function () {
        cy.fixture("searchProduct").then(function (data) {
            this.data = data;
        })
    })

    it('Count total desktops computer', function () {
        addCart.goToWebsite(this.data.url)
        countTotalDesktop.clickOnCategaries()
        countTotalDesktop.clickOnDesktopsComputerButton()
        countTotalDesktop.countTheDesktopComputer() 
    })

})