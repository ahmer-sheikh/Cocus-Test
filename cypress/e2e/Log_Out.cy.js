describe('LogOut Testing', () => {
    it('Login and Logout Testing', () => {
        cy.visit('https://www.simplybe.co.uk/');             //Navigating to website
        cy.wait(3000)
        cy.get('#onetrust-accept-btn-handler').click();      //Accepting Cookies
        cy.wait(3000)
        cy.get('[data-testid="signin-test"]').click();       //Sign In Button
        cy.wait(3000)
        cy.get('#username').type('ahmersheikh240@gmail.com');   //Email
        cy.wait(3000)
        cy.get('#password').type('Sheikh@02834');               //Password
        cy.wait(3000)
        cy.get('#signInButton').click();                        //Sign In 
        cy.wait(3000)
        cy.get('[data-cy="split-header-menu-button"]').click();     //Menu
        cy.wait(3000)
        cy.get(':nth-child(1) > .Nav-module_NavList__o7Jds > :nth-child(20) > .Nav-module_NavButton__IW5Pz').scrollIntoView().click();      //Sign Out
    })
})