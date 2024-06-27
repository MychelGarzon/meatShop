describe('Add products', () => {
    before(() => {
      cy.visit('https://alcorte.com.co');

      
    });

    it("Should select products to the cart and see the description of the product", () =>{
    cy.get('._filterButtons_1eah2_14 > :nth-child(7)').click()
    cy.get('._quantityBox_m5rcp_11 > .MuiButtonBase-root').click()
    cy.get('.MuiCardMedia-root').click()
    cy.get('._quantityBoxDetails_1avy0_68 > ._quantityBox_m5rcp_11 > ._quantityControls_m5rcp_1 > :nth-child(3) > ._minusPlusButton_1mdb6_1').click()
    cy.get('._quantityBoxDetails_1avy0_68 > ._quantityBox_m5rcp_11 > ._quantityControls_m5rcp_1 > :nth-child(1) > ._minusPlusButton_1mdb6_1').click()
    cy.get('._closeIconBox_1avy0_57 > .MuiButtonBase-root').click()
    cy.get('[href="/cart"] > .MuiButtonBase-root').click()
    cy.get('._desktop_xzru0_84 > ._flex2_xzru0_30 > ._delete_xzru0_74 > [data-testid="DeleteIcon"] > path').click()
    cy.get('#noButton').click()
    cy.get('._back-btn_ewu4r_28 > a > .MuiButtonBase-root').click()
    });
   

});