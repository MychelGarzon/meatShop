describe("Use the product filters", () => {
  before(() => {
    cy.visit("https://alcorte.com.co");
  });

  it("Place an order with only the beef products", () => {
    cy.get(":nth-child(3) > .MuiChip-label").click();
    cy.get(
      ":nth-child(1) > .MuiCardContent-root > ._quantityBox_npj6c_26 > ._quantityBox_m5rcp_11 > .MuiButtonBase-root"
    ).click();
    cy.get(
      ":nth-child(2) > .MuiCardContent-root > ._quantityBox_npj6c_26 > ._quantityBox_m5rcp_11 > .MuiButtonBase-root"
    ).click();
    cy.get(
        ":nth-child(3) > .MuiCardContent-root > ._quantityBox_npj6c_26 > ._quantityBox_m5rcp_11 > .MuiButtonBase-root"
      ).click();
      cy.get(
        ":nth-child(4) > .MuiCardContent-root > ._quantityBox_npj6c_26 > ._quantityBox_m5rcp_11 > .MuiButtonBase-root"
      ).click();
      cy.get('[href="/cart"] > .MuiButtonBase-root').click()
      cy.get(':nth-child(3) > :nth-child(2) > ._plusButton_1mdb6_14').click()
      cy.get(':nth-child(5) > :nth-child(2) > ._plusButton_1mdb6_14').click()
      cy.get(':nth-child(7) > :nth-child(2) > ._plusButton_1mdb6_14').click()
      cy.get(':nth-child(9) > :nth-child(2) > ._plusButton_1mdb6_14').click()
      cy.get(':nth-child(1) > .MuiInputBase-root > #outlined-basic').type('name')
      cy.get('#mui-component-select-city').click();
cy.get('li[data-value="Teusaquillo"]').click(); 
cy.get(':nth-child(3) > .MuiInputBase-root > #outlined-basic').type('address')
cy.get(':nth-child(4) > .MuiInputBase-root > #outlined-basic').type('neighbourhood')
cy.get(':nth-child(5) > .MuiInputBase-root > #outlined-basic').type('Localities')
cy.get(':nth-child(6) > .MuiInputBase-root > #outlined-basic').type('phone')
cy.get(':nth-child(7) > .MuiInputBase-root > #outlined-basic').type('email@email.fi')
cy.get(':nth-child(8) > .MuiInputBase-root > #outlined-basic').type('Nice app')
cy.get('button[type="submit"]').click();

cy.url().should('include', '/success');

  });
});
