/// <reference types="cypress" />
import AddProductCart from "../../Pages/AddProductCart";
import CommunityPollSendMessage from "../../Pages/CommunityPollSendMessage";

const addCart = new AddProductCart();
const poll = new CommunityPollSendMessage();

describe('Test verify the community poll send message', function () {
    beforeEach(function () {
        cy.fixture("searchProduct").then(function (data) {
            this.data = data;
        })
    })

    it('Select poll message and verify sent', function () {
        addCart.goToWebsite(this.data.url)
        poll.selectTheRadioButton()
        poll.clickOnVoteButton()
    })
})