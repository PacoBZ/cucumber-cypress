
# Login Example Completed

This branch has the master's branch example completed.

## Completing the DOM reference

For this example, we will to use the example website ```https://s1.demo.opensourcecms.com/wordpress/wp-login.php```

So the Page Object class will look like this.

<a href="https://ibb.co/2KnmQY6"><img src="https://i.ibb.co/F7xNMqW/Captura-de-pantalla-2019-08-06-a-las-14-28-35.png" alt="Captura-de-pantalla-2019-08-06-a-las-14-28-35" border="0"></a>

References to the different elements of the login website have been filled in.

Then, look at the ```.feature``` file, now it shows the true user name and password of the website in the "Example" table.
 
 ```Username: opensourcecms ```

 ```Password: opensourcecms ```



<a href="https://imgbb.com/"><img src="https://i.ibb.co/ThMmQhh/Captura-de-pantalla-2019-08-07-a-las-9-19-48.png" alt="Captura-de-pantalla-2019-08-07-a-las-9-19-48" border="0"></a>
***
## Commands

Another way to make login is throught commands. When you have an action that you may repeat a lot, an optimal way is make a cypress command.

<a href="https://ibb.co/jWTxVsT"><img src="https://i.ibb.co/3M78fQ7/Captura-de-pantalla-2019-08-07-a-las-9-24-50.png" alt="Captura-de-pantalla-2019-08-07-a-las-9-24-50" border="0"></a>

You can see it at [commands.js](https://github.com/PacoBZ/cucumber-cypress/blob/login-example-completed/cypress/support/commands.js), and add another commands that you need.

***

The next step is create a common integration step to use it:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/tYmTFD8/Captura-de-pantalla-2019-08-07-a-las-9-36-27.png" alt="Captura-de-pantalla-2019-08-07-a-las-9-36-27" border="0"></a>

You can see it at [loginStep.js](https://github.com/PacoBZ/cucumber-cypress/blob/login-example-completed/cypress/integration/common/loginStep.js)

But, as you can see, I used a different form to get the user info, that's the fixtures.

***

## Fixtures

Fixtures are files that encapsule reusable information, for example, login information:

<a href="https://imgbb.com/"><img src="https://i.ibb.co/NK1n97M/Captura-de-pantalla-2019-08-07-a-las-9-50-25.png" alt="Captura-de-pantalla-2019-08-07-a-las-9-50-25" border="0"></a>

To invoke them, use and "alias", for example:

```cy.fixture('login.json').as('loginData')```

Then use the content in combination with the command "login".

<a href="https://ibb.co/LYHkywM"><img src="https://i.ibb.co/zQDngc1/Captura-de-pantalla-2019-08-07-a-las-14-43-29.png" alt="Captura-de-pantalla-2019-08-07-a-las-14-43-29" border="0"></a>

To finish, change the step in the ```Login.feature``` file to call the new step. Now ```npm run test``` and try it!