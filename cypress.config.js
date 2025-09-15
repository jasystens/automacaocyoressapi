const { defineConfig } = require('cypress');

module.exports = defineConfig{
    reporter:'cypress-multireporter',
    reporterOptions: {
       reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
       mochaJunitReporterReporterOptions: {
         mochaFile: 'cypress/reports/junit/results.xml',
       },
       cypressMochaawesomeReporterReporterOptions: {
        chars:true,
        reporterPageTitle: 'Relatorio serverrest API',
        embeddedScreenshots: true,
        saveAllAttempts: false,


       }
    },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    
  },
}):
  

