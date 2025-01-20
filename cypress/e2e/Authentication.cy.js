describe('Authentication Registration', () => {
  
  it('Registration Testing', () => {
    cy.visit('https://www.jacamo.co.uk/');                          //Navigating to website
    cy.get('#onetrust-accept-btn-handler').click();                 //Accepting cookies
    cy.get('[data-testid="signin-test"]').click();                  //SignIn button for Registration
    cy.get('#newCustomerButton').click();                           //Registration Button
    cy.get('#salutation').should('be.visible').select('Mr');        //Select Title
    cy.get('#firstName').type('Ahmer');                             //FirstName
    cy.get('#lastName').type('Sheikh');                             //LastName
    cy.get(':nth-child(1) > #day').type('25');                      //Date
    cy.get('.register__dob > :nth-child(2) > #month').type('03');   //Month
    cy.get(':nth-child(3) > #year').type('1995');                   //Year
    cy.get('#phoneNumber').type('07404542891');                     //Contact
    cy.get('#address').type('36 Roundhill Way GUILDFORD');          //Home Address
    cy.wait(1000);                                                  //wait for autosharing address
    cy.get('#GB\\|RM\\|A\\|10095997\\|ENG').click();                //Address confirming tab       
    cy.get('#email').type('sheikhahmer250@gmail.com');              //Email
    cy.get('#password').type('Sheikh@02834');                       //Password
    cy.get('#emailOptIn').click();                                  //Email option
    cy.get('#postOptOut').click();                                  //Post option
    cy.get('#phoneOptOut').click();                                 //Phone option
    //cy.get(':nth-child(11) > .button').click();                     //Continue to regitration button
    //cy.screenshot('Authentication Registration')                     /Screenshot for verifying
  })
})
