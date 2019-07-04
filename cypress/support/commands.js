
Cypress.Commands.add('login', ({ email, password }) => {
    cy.get('LoginUserMailInputSelector').clear().type(email) // Change 'LoginUserMailInputSelector' for real DOM selector
    cy.get('LoginPasswordInputSelector').clear().type(password, { log: false }) // Change 'LoginPasswordInputSelector' for real DOM selector
    cy.get('LoginAccessButtonSelector').click() // Change 'LoginAccessButtonSelector' for real DOM selector
})