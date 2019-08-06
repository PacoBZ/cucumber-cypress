
Cypress.Commands.add('login', ({ email, password }) => {
    cy.get('#user_login').clear().type(email) 
    cy.get('#user_pass').clear().type(password, { log: false })
    cy.get('#wp-submit').click() 
})