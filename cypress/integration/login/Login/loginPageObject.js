class LoginPage {

    constructor() {
    }

    goWeb() {
        cy.visit(''); //Login Page Url
    }

    getEmailInput() {
        return cy.get('') //Login User email Input
    }

    getPasswordInput() {
        return cy.get('') //Login User password Input
    }

    getLoginAccessButton() {
        return cy.get('') //Login Access Button
    }

}

export default LoginPage;


