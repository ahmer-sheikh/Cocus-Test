describe('Applying Promo Codes', () => {
  
    it('Promo Code Testing', () => {
      cy.visit('https://www.simplybe.co.uk/');                          //Navigating to website
      cy.wait(3000)
      cy.get('#onetrust-accept-btn-handler').click();                 //Accepting cookies
      cy.wait(3000)
      cy.get('[data-testid="signin-test"]').click();          //SignIn Button
      cy.wait(3000)
      cy.get('#username').type('sheikhahmer250@gmail.com');   //Email
      cy.wait(3000)
      cy.get('#password').type('Sheikh@02834');   //Password
      cy.wait(3000)
      cy.get('#signInButton').click();      //SignIn Button
      cy.wait(3000)
      cy.get('.TopLinks_nav__1fIrY > :nth-child(1) > .Button').click();   //Sale Button
      cy.wait(3000)
      cy.get('#categoryQuickLinks > .QuickLinks_touchCarouselContainer___aXvN > [aria-label="Quick link for Sizes 8-10"] > .Button').click();   //Size Filter
      cy.wait(3000)
      cy.get('#is086 > .productCardDiv > .ProductCard_wrapper__0sgqr > .ProductCard_imgWrapper__PF1OE > .ProductCard_image__hwAN_').click();    //First Product
      cy.wait(3000)
      cy.get('[data-cy="select-size"]').click();    //Select Size
      cy.wait(3000)
      cy.get(':nth-child(2) > .Cell_Root__Oe8AC').click();    //Size 12
      cy.wait(3000)
      cy.get('.ProductDetails_addToBagContainer__IYHZq > .Button').click();   //Add to Bag
      cy.wait(3000)
      cy.get('[data-cy="GoToBagPDP"]').click();   // Go to Bag
      cy.wait(3000)
      cy.get('#promotionCodeInput').type('MNDAY');   //Applying Promo Code
      cy.wait(3000)
      cy.get('.PromoCode_promoCode__buttonWrapper__VGuOw > #Addpromo').click();   //Add Promo Button
      cy.wait(3000)
      cy.get('.OrderSummary_codeDiscountText__fEhfx', { timeout: 15000 }).scrollIntoView()
        .should('exist') // Ensure the element exists
        .and('be.visible') // Ensure it is visible
        .invoke('text')
        .should('eq', 'MNDAY - 20.00% OFF'); // Check exact text
      cy.wait(3000)
      cy.get('.OrderSummary_wrapperPadding__U7GRV > [data-cy="GoToCheckout"]').click();   //Checkout Button
      cy.wait(10000)
      cy.get('[aria-label="Click to collect my order"] > .CheckoutPayment_TabButton__label__oXBnk').click();    //Click & Collect
      cy.wait(10000)
      cy.get('.CheckoutDelivery_nextPage__91pPz > #paymentButton').click();   //Continue to Payment
      cy.wait(3000)
      //cy.get('.Offer_buttonWrapper___zqhM > .Button').click();    //Apply Now
      //cy.screenshot('Applying Promo Code')

    })
    })