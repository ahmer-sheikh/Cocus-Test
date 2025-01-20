describe('Authentication Registration', () => {
  
  it('Registration Testing', () => {
    cy.visit('https://www.jacamo.co.uk/');                          //Navigating to website
    cy.wait(2000)
    cy.get('#onetrust-accept-btn-handler').click();                 //Accepting cookies
    cy.wait(2000)
    cy.get('[data-testid="signin-test"]').click();                  //SignIn button for Registration
    cy.wait(2000)
    cy.get('#newCustomerButton').click();                           //Registration Button
    cy.wait(2000)
    cy.get('#salutation').should('be.visible').select('Mr');        //Select Title
    cy.wait(2000)
    cy.get('#firstName').type('Ahmer');                             //FirstName
    cy.wait(2000)
    cy.get('#lastName').type('Sheikh');                             //LastName
    cy.wait(2000)
    cy.get(':nth-child(1) > #day').type('25');                      //Date
    cy.wait(2000)
    cy.get('.register__dob > :nth-child(2) > #month').type('03');   //Month
    cy.wait(2000)
    cy.get(':nth-child(3) > #year').type('1995');                   //Year
    cy.wait(2000)
    cy.get('#phoneNumber').type('07404542891');                     //Contact
    cy.wait(2000)
    cy.get('#address').type('36 Roundhill Way GUILDFORD');          //Home Address
    cy.wait(2000);                                                  //Wait for autosharing address
    cy.get('#GB\\|RM\\|A\\|10095997\\|ENG').click();                //Address confirming tab      
    cy.wait(2000) 
    cy.get('#email').type('ahmersheikh11@gmail.com');              //Email
    cy.wait(2000)
    cy.get('#password').type('Sheikh@02834');                       //Password
    cy.wait(2000)
    cy.get('#emailOptIn').click();                                  //Email option
    cy.wait(2000)
    cy.get('#postOptOut').click();                                  //Post option
    cy.wait(2000)
    cy.get('#phoneOptOut').click();                                 //Phone option
    cy.wait(2000)
    cy.get(':nth-child(11) > .button').click();                     //Continue to regitration button
    cy.wait(2000)
    cy.screenshot('Authentication Registration')                    //Screenshot for verifying
    cy.wait(2000)
  })
})
