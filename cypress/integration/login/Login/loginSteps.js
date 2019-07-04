import { Given, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./loginPageObject";

const loginPage = new LoginPage();

When('I write my login email {string}', (email) => {
    loginPage.getEmailInput().clear().type(email);
});

When('I write my password {string}', (password) => {
    loginPage.getPasswordInput().clear().type(password);

});

When('I press the access button', (email) => {
    loginPage.getLoginAccessButton().click();
});

Given('I am on home page', () => {
    cy.server()
    cy.route('GET','/user/data/Example/get').as('userDataRequest')
    
    cy.wait('@userDataRequest')

    cy.title().should("include", "HOME");
});

