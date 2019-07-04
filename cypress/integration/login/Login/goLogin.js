import { Given } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./loginPageObject";

const loginPage = new LoginPage();

Given('I am on login page', () => {
    loginPage.goWeb();
});