class LoginPage {

    constructor() {
    }

    goWeb() {
        cy.visit('https://s1.demo.opensourcecms.com/wordpress/wp-login.php'); //Login Page Url
    }

    getEmailInput() {
        return cy.get('#user_login') //Login User email Input
    }

    getPasswordInput() {
        return cy.get('#user_pass') //Login User password Input
    }

    getLoginAccessButton() {
        return cy.get('#wp-submit') //Login Access Button
    }

}

export default LoginPage;


