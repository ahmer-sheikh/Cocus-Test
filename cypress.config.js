const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Set mochawesome as the reporter
  e2e: {
    setupNodeEvents(on, config) {
      // Enable screenshot on test failure
      this.screenshotOnRunFailure = true;

      // Add mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // Other setup configurations for Node events can be added here
    },
    video: true, // Enable video recording
    videoUploadOnPasses: true, // Record videos for passed tests
    videoCompression: 32, // Optional: Set video compression quality (lower = higher quality)
  },
});



