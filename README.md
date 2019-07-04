
# Welcome to BDD with Cypress and Cucumber!
Tutorial to start to implement E2E with Cucumber and Cypress and don't die trying it.
## Let's do start!: Installation
`npm install `

That's all you need to install!

### Dependencies
"cypress": " [https://www.cypress.io/](https://www.cypress.io/)

"mocha": "[https://mochajs.org/](https://mochajs.org/)

"mochawesome": " [https://www.npmjs.com/package/mochawesome](https://www.npmjs.com/package/mochawesome)

"mochawesome-merge": " [https://www.npmjs.com/package/mochawesome-merge](https://www.npmjs.com/package/mochawesome-merge)

"mochawesome-report-generator": "[https://www.npmjs.com/package/mochawesome-report-generator](https://www.npmjs.com/package/mochawesome-report-generator)

# How it Works?
### Console commands to launch
`npm run test` => Launch cypress Test on "headless" mode

`npm run open` => Open the Cypress interface to launch Test manually

`npm run report` => Unifies the generated reports generated
## Integration
The integration folder has the biggest part of our code, you 'll create as many folder as Features you want to test.

Inside of each **feature folder** you'll create a code integration folder and a feature when you'll define the behaviour of the test.

**Folder Structure**

<a href="https://ibb.co/tKp0SnF"><img src="https://i.ibb.co/dM4NSXx/Captura-de-pantalla-2019-07-04-a-las-9-45-09.png" alt="Captura-de-pantalla-2019-07-04-a-las-9-45-09" border="0"></a>

You can find an example about how can be a **Login feature** treatment.

## Lets go see it!
### Features
First of all we'll find the ".feature" file where we'll define, with a human language (Gherkin), the behaviour of the feature.
<a href="https://ibb.co/pQxL2ZY"><img src="https://i.ibb.co/XDbCXpc/Captura-de-pantalla-2019-07-04-a-las-11-33-09.png" alt="Captura-de-pantalla-2019-07-04-a-las-11-33-09" border="0"></a>
We can define as many cases as Example lines we add to the table. That "words" replace the "<>" variables.

|			email               |      password             |
|-------------------------------|---------------------------|
|         'UserMail1'           |'UserPassword1'            |
|         'UserMail2'           |"UserPassword2"            |
|         'UserMail3'           |"UserPassword3"            |

> **Note:** For more information about **Gherkin** visit [https://cucumber.io/docs/gherkin/](https://cucumber.io/docs/gherkin/)

### StepDefinition
The next step is translate the definition to code. At "codeIntegrationFolder" we'll create as many files as steps we need to separate. **Look at example:**
<a href="https://ibb.co/BZp4GzF"><img src="https://i.ibb.co/580YkMw/Captura-de-pantalla-2019-07-04-a-las-11-40-14.png" alt="Captura-de-pantalla-2019-07-04-a-las-11-40-14" border="0"></a>

In this case, I created a StepFile to access to login webpage and another to collect the writing email, password and the confirmation button.
**Login Page Access**
<a href="https://ibb.co/tcz5S2t"><img src="https://i.ibb.co/J2qPNp4/Captura-de-pantalla-2019-07-04-a-las-11-45-16.png" alt="Captura-de-pantalla-2019-07-04-a-las-11-45-16" border="0"></a>

**Login Steps**
<a href="https://ibb.co/Rgh3PTN"><img src="https://i.ibb.co/HKNtYTC/Captura-de-pantalla-2019-07-04-a-las-11-45-28.png" alt="Captura-de-pantalla-2019-07-04-a-las-11-45-28" border="0"></a>

  
But part of the equation is still missing, how do we interact with the DOM? Ok, it's time to talk about the PageObjects.
### PageObjects
At PageObjects files we''ll make an Objects that represents the Feature WebPage/s and the elements on it as well as other generic methods to deal with it.

<a href="https://ibb.co/b1tmRHw"><img src="https://i.ibb.co/kKZB63b/Captura-de-pantalla-2019-07-04-a-las-12-07-29.png" alt="Captura-de-pantalla-2019-07-04-a-las-12-07-29" border="0"></a>

And that's the part where Cypress helps you!
<a href="https://ibb.co/vJCT7q0"><img src="https://i.ibb.co/FBkyS3R/Captura-de-pantalla-2019-07-04-a-las-12-17-18.png" alt="Captura-de-pantalla-2019-07-04-a-las-12-17-18" border="0"></a>
Cypress has a really useful interface where you can interact and search the elements you want to interact with.
But that's not all, Cypress has a lot of interesting features to make easy your E2E test.
In this project you can find another examples on [Cypress section](https://github.com/PacoBZ/cucumber-cypress/blob/master/cypress/README.md)
> **Note:** Go to the Cypress Tips readme to see more about how Cypress helps you
## Fixtures
## Commands Folder


You only have to change the "fake" usersMail and Pass with your own login data!
