describe('Adding Products to Bag', () => {
    it('Products to Bag Testing', () => {
        cy.visit('https://www.simplybe.co.uk/');
        cy.wait(5000)
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait(5000)
        cy.get('[data-testid="signin-test"]').click();
        cy.wait(5000)
        cy.get('#username').type('sheikhahmer250@gmail.com');
        cy.wait(5000)
        cy.get('#password').type('Sheikh@02834');
        cy.wait(5000)
        cy.get('#signInButton').click();
        cy.wait(5000)
        cy.get('.TopLinks_nav__1fIrY > :nth-child(1) > .Button').click(); //Sale Button
        cy.wait(5000)
        cy.get('#categoryQuickLinks > .QuickLinks_touchCarouselContainer___aXvN > [aria-label="Quick link for Sizes 12-14"] > .Button').click(); //Sizes 12-14 Button
        cy.wait(5000)
        cy.get('#dr393 > .productCardDiv > .ProductCard_wrapper__0sgqr > .ProductCard_imgWrapper__PF1OE > .ProductCard_image__hwAN_').click();      //First Product
        cy.wait(5000)
        cy.get('[data-cy="select-size"]').scrollIntoView().click();       //Select size
        cy.wait(5000)
        cy.get(':nth-child(3) > .Cell_Root__Oe8AC').click();              //Size 12/14
        cy.wait(5000)
        cy.get('.ProductDetails_addToBagContainer__IYHZq > .Button').click();       //Add to Bag Button
        cy.wait(5000)
        cy.get('.ProductDetails_continueButton__B8_Op > .Button').click();          //Continue Shopping
        cy.wait(5000)
        cy.get('.slick-current > :nth-child(1) > [data-cy="product-card"] > .productCardDiv > .ProductCard_wrapper__0sgqr > .ProductCard_imgWrapper__PF1OE', {timeout:10000}).should('be.visible').click({ force: true, multiple: true });
        cy.wait(10000)
        //cy.get('[data-cy="select-colour"]').click();
        //cy.wait(5000)
        //cy.get('.SelectedColourContent_Root__Vui8r > :nth-child(1) > .Cell_Root__Oe8AC').click();
        //cy.wait(5000)
        cy.get('[data-cy="select-size"]').click() //Select size
        cy.wait(5000)
        cy.get(':nth-child(2) > .Cell_Root__Oe8AC')      //Size 12
        cy.wait(5000)
        cy.get('.ProductDetails_addToBagContainer__IYHZq > .Button').click()      //Add to Bag
        cy.wait(5000)
        cy.get('[data-cy="GoToBagPDP"]').click()      //Go to Bag
        cy.wait(5000)
        cy.get('.OrderSummary_wrapperPadding__U7GRV > [data-cy="GoToCheckout"]').click();       //Go to checkout
        cy.wait(5000)
        cy.get('[aria-label="Click to collect my order"] > .CheckoutPayment_TabButton__label__oXBnk').click();      //Click & Collect Mode
        cy.wait(5000)
        cy.get('.CheckoutDelivery_nextPage__91pPz > #paymentButton').click();       //Continue to payment button
        cy.wait(5000)

        





     })
 })