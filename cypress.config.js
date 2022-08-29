const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1250,
  viewportHeight: 800,
  e2e: {
    baseUrl: "https://app.fieldwire.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

