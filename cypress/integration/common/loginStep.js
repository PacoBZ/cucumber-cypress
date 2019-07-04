import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/Login/loginPageObject";

const loginpage = new LoginPage();

Given('Im logged on Sanitas Smile', () => {
    loginpage.goWeb()

    cy.fixture('login.json').as('loginData')

    cy.get('@loginData')
        .then(({ email, password }) => {
            cy.login({ email, password });
        })
});
