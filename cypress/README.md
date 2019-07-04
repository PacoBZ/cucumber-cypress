
# Cypress Tips

 Here you can find some useful tips that can help you making e2e with cypress.


## Fixtures

The fixtures are a fixed set of data that you can load from a file.

At **fixtures** folder, you can find an example how you can make a simple login fixture. Then check the file [**cypress/integration/common/loginStep.js**](https://github.com/PacoBZ/cucumber-cypress/blob/master/cypress/integration/common/loginStep.js) where you can find an example about implement a fixture with a **command**

> **Note:** You can find more info at the official Doc site [Cypress Fixtures Doc](https://docs.cypress.io/api/commands/fixture.html#Syntax)

## Commands

Now, let's talk about the commands, a useful way to evade the repetition of some code snippets or have easy access to some commonly used methods.

<a href="https://ibb.co/YLJy5c9"><img src="https://i.ibb.co/hmrZGB5/Captura-de-pantalla-2019-07-11-a-las-9-07-30.png" alt="Captura-de-pantalla-2019-07-11-a-las-9-07-30" border="0"></a>

That is an example you can find at [**cypress/support/commands.js**](https://github.com/PacoBZ/cucumber-cypress/blob/master/cypress/support/commands.js) and you can see how implements on [**cypress/integration/common/loginStep.js**](https://github.com/PacoBZ/cucumber-cypress/blob/master/cypress/integration/common/loginStep.js)

<a href="https://ibb.co/sFZX0By"><img src="https://i.ibb.co/30nPDJB/Captura-de-pantalla-2019-07-11-a-las-9-24-18.png" alt="Captura-de-pantalla-2019-07-11-a-las-9-24-18" border="0"></a>

## Reports

The reports are a way to receive feedback easily and understandable by all.

In this case, the project is configurated to use **mochawesome**.



Once your tests have finished, execute the command 

`npm run report`

to unify and show the results (clicking on the link shown by console)


> **Note:** You can find more info at the official Doc site [Cypress Reporters Doc](https://docs.cypress.io/guides/tooling/reporters.html#Reporter-Options)

