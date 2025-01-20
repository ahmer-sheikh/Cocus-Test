# Coding Challenge: Framework Development for E-commerce Website 

## Overview
This project is a Cypress-based test automation framework for the SimplyBe e-commerce website. The framework demonstrates modern coding standards, best practices in test automation, and effective reporting mechanisms. The focus is on maintainability, scalability, and quality over quantity of test coverage.

---

## Framework Setup and Installation

### Prerequisites
- **Node.js**: v18.18.1  
- **npm**: v9.8.1 
- **Cypress**: v14.0.0
- **Cypress** Slowdownv1.0.0
- **CypressReport** v1.0.0  

### Steps to Install

Visit the Node.js Website:https://nodejs.org.
choosed the LTS (Long-Term Support)
Run the Installer:
Followed the setup and added to PATH
Complete the installation.

## For Cypress Installation

npm install cypress --save -dev
npx cypress open

## Dependencies 
The framework uses the following tools and libraries:

Cypress: v14.0.0 - A JavaScript-based end-to-end testing framework.
Node.js: v18.18.1 - Runtime environment for JavaScript.
npm: v9.8.1 - Package manager for Node.js.
cypress-slow-down: v1.0.0 - Adds delays to tests for debugging.
Mochawesome: v7.x.x - Generates detailed HTML reports for test execution.

## For Test Execution
- This command is to run all tests in headless mode
npx cypress run

- This command is to open the interactive Cypress Test Runner
npx cypress open


## For Viewing Reports
- Following is command to install the cypress-mochawesome-reporter
npm install --save-dev cypress-mochawesome-reporter

- Configured this codes in config.js file for report and screenshots
const { defineConfig } = require('cypress');

- This is for slowing the test case
npm install --save-dev cypress-slow-down  


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Set mochawesome as the reporter
  e2e: {
    setupNodeEvents(on, config) {
      // Enable screenshot on test failure
      this.screenshotOnRunFailure = true;

      // Add mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    
    },
  },
  
});
