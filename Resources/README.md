# Using the e2e tests template
* Copy the **Resources** directory to your Project
* Install and activate the plugin you write tests for ```php bin/console plugin:install *PLUGIN-NAME* -c --activate```
* Build the domain *(Storefront / Administration)* the tests are for.
    * ```./psh.phar storefront:build``` OR ```./psh.phar administration:build```
* Adjust the package.json for the new project: 
    * name
    * url
    * homepage
    * if necessary adjust the requirement versions.
* Write tests in the *Resources/app/StoreFront/test/e2e/cypress/integration* directory. Use ```*.spec.js``` as file extension.
## Execute tests
* Start your Shopware6 environment in productive mode: **.env** file: ```APP_ENV=prod```
* Go to the directory for the domain *(Storefront / Administration)* you want to execute the e2e tests. **Like:** Resources/app/*(Storefront/Administration)*/test/e2e
* Here you execute: ```npm install```
* For development execute: ```npm run open```
* For test execution only execute: ```npm run cypress:run``` 