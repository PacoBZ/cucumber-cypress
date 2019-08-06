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
    cy.title().should("include", "Dashboard");
});

