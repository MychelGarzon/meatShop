describe('Use the product filters', () => {
  before(() => {
    cy.visit('https://alcorte.com.co');
  });

  it("Should click on the all the filters", () => {
    cy.get(':nth-child(3) > .MuiChip-label').click();
    cy.get(':nth-child(4) > .MuiChip-label').click();
    cy.get(':nth-child(5) > .MuiChip-label').click();
    cy.get('._filterButtons_1eah2_14 > :nth-child(6)').click();
    cy.get(':nth-child(7) > .MuiChip-label').click();
    cy.get(':nth-child(3) > .MuiChip-label').click();
    cy.get(':nth-child(4) > .MuiChip-label').click();
    cy.get(':nth-child(5) > .MuiChip-label').click();
    cy.get('._filterButtons_1eah2_14 > :nth-child(6)').click();
    cy.get(':nth-child(7) > .MuiChip-label').click();
    cy.get('.MuiChip-filled > .MuiChip-label').click();

  });
 
});
