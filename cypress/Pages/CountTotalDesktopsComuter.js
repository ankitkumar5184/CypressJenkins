class totalDesktopsComuter {

    CLICK_ON_CATEGORIES = "//div[contains(text(), 'Categories')]";
    CLICK_ON_COMPUTERS_CATEGORIES = "//div[contains(text(), 'Categories')]//following::a[contains(text(), 'Computers')]";
    CLICK_ON_DESKTOPS_CATEGORIES = "//strong[contains(text(), 'Categories')]//following::a[contains(text(), 'Desktops')][1]";
    COUNT_LENGTH__OF_DESKTOPS_COMPUTER = "//div[@class='product-item']";

    clickOnCategaries() {
        cy.wait(3000)
        cy.xpath(this.CLICK_ON_CATEGORIES).click()
        cy.wait(3000)
        cy.xpath(this.CLICK_ON_COMPUTERS_CATEGORIES).click()
    }

    clickOnDesktopsComputerButton() {
        cy.xpath(this.CLICK_ON_DESKTOPS_CATEGORIES).click({ force: true })
    }

    countTheDesktopComputer() {
        cy.xpath(this.COUNT_LENGTH__OF_DESKTOPS_COMPUTER).then(($el) => {
            const count = $el.length
            cy.xpath(this.COUNT_LENGTH__OF_DESKTOPS_COMPUTER).should("have.length", count)
        })
    }

}
export default totalDesktopsComuter