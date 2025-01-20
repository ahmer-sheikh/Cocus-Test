describe('Browsing Catalog Testing', () => {
  
    it('Browsing Catalog Test', () => {
      cy.visit('https://www.simplybe.co.uk/');                          //Navigating to website
      cy.wait(5000)
      cy.get('#onetrust-accept-btn-handler').click();                   //Accepting cookies
      cy.wait(5000)
      cy.get('[data-testid="signin-test"]').click();                    //SignIn Button
      cy.wait(5000)
      cy.get('#username').type('sheikhahmer250@gmail.com');             //Email
      cy.wait(5000)
      cy.get('#password').type('Sheikh@02834');                         //Password
      cy.wait(5000)
      cy.get('#signInButton').click();                                  //SignIn Button
      cy.wait(5000)
      cy.get('.TopLinks_nav__1fIrY > :nth-child(1) > .Button').click();                                                                            //Sale Section
      cy.wait(5000)
      cy.get('#is086 > .productCardDiv > .ProductCard_wrapper__0sgqr > .ProductCard_imgWrapper__PF1OE > .ProductCard_image__hwAN_').click();       //Product 1
      cy.wait(5000)
      cy.go('back');
      cy.wait(5000)
      cy.get('#ql243 > .productCardDiv > .ProductCard_wrapper__0sgqr > .ProductCard_imgWrapper__PF1OE > .ProductCard_image__hwAN_').scrollIntoView().click();       //Product 2
      cy.wait(5000)
      cy.go('back');
      cy.wait(5000)
      cy.get('#sb099 > .productCardDiv > .ProductCard_wrapper__0sgqr > .ProductCard_imgWrapper__PF1OE > .ProductCard_image__hwAN_').scrollIntoView().click();       //Product 3
      cy.wait(5000)
      cy.go('back');
      cy.wait(5000)
      cy.go('back');
      cy.get('.TopLinks_nav__1fIrY > :nth-child(2) > .Button').click();         //New In Section
      cy.wait(5000)
      cy.get('#fe334 > .productCardDiv > .ProductCard_wrapper__0sgqr > .ProductCard_imgWrapper__PF1OE > .ProductCard_image__hwAN_').scrollIntoView().click();       //Product 1
      cy.wait(5000)
      cy.go('back');
      cy.wait(5000)
      cy.get('[data-cy="load-more-products-button-next"]').scrollIntoView().click();                    //Load more products
      cy.wait(10000)
      cy.get('#sg122 > .productCardDiv > [data-cy="sfl-heart-fill-btn"] > .IconSFL_iconWrapper__WtXuQ').scrollIntoView().click();       //Save Product
      cy.wait(5000)
      cy.get(':nth-child(2) > .Cell_Root__Oe8AC').click();      //Select Size
      cy.wait(5000)
      cy.get('[data-cy="saved-button"]').click();               //Save Button
      cy.wait(5000)
      cy.get('[data-cy="sfl-clear-all-button"]').click();       //Clear all button
      cy.wait(5000)
      cy.get('[data-cy="sfl-clear-all-yes-button"]').click();   //Clear Confirm
      cy.wait(5000)
      cy.get('[data-cy="split-header-menu-button"]').click();   //Menu
      cy.wait(5000)
      cy.get(':nth-child(1) > .Nav-module_NavList__o7Jds > :nth-child(9) > .Nav-module_NavButton__IW5Pz').click();      // Shoes
      cy.wait(5000)
      cy.get('.Nav-module_NavListWrappingLayer__t7eK-__8 > :nth-child(2) > :nth-child(2) > [data-cy="level-two-nav-item"]').click();  //All Shoes
      cy.wait(5000)
      cy.get('[data-cy="split-header-menu-button"]').click();    //Menu
      cy.wait(5000)
      cy.get(':nth-child(1) > .Nav-module_NavList__o7Jds > :nth-child(20) > .Nav-module_NavButton__IW5Pz').scrollIntoView().click();    //SignOut 
      cy.wait(5000)
      
      
      
    })
})