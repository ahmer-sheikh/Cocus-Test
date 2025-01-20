const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Set mochawesome as the reporter
  e2e: {
    setupNodeEvents(on, config) {
      // Enable screenshot on test failure
      this.screenshotOnRunFailure = true;

      // Add mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // You can also add other plugins or event listeners here
      
    },
  },
  
});


