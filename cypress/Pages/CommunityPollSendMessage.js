class PollSendMessage {

    SELECT_RADIO_BUTTON = "//input[@value='2']";
    VOTE_BUTTON = "//button[contains(text(), 'Vote')]";

    selectTheRadioButton() {
        cy.xpath(this.SELECT_RADIO_BUTTON).click()
    }

    clickOnVoteButton(){
        cy.xpath(this.VOTE_BUTTON).click()
        cy.xpath(this.VOTE_BUTTON).click().should("be.enabled", "clickable")
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("Failed to vote.");
        })
    }
}
export default PollSendMessage