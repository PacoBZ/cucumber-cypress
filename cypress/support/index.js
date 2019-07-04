
// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Screenshot.defaults({
    blackout: ['.secret-info', '[data-hide=true]']
  })

