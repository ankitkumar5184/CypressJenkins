/// <reference types="Cypress" />
it('shows bar chart', () => {
    cy.visit("https://valor-software.com/ng2-charts/#PieChart")
    cy.xpath("//canvas['_ngcontent-yvs-c33']").should('be.visible').trigger('mouseover').click({force:true})
    cy.xpath("//canvas['_ngcontent-yvs-c33']")
      .should('be.visible')
      .and(chart => {
        // we can assert anything about the chart really
        expect(chart.height()).to.be.eq(1170)
      })
      
  })