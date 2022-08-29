# cypressPageObjects

Pre-requisites: node.js, npm, npx, cypress 

To install npm:
npm install -g npm

To install npx:
npm i npx

To install cypress:
npm install cypress --save-dev

Page Objects location:
cypress/support/pageObjects

Tests location:
cypress/e2e

The following commands can be executed from commandline to run the tests-
- To run all tests on Electron browser in headless mode:
    npm run allTests-headless

- To run all tests on Electron browser in headed mode:
    npm run allTests-headed

- To run all tests in headless mode in Chrome:
    npm run allTests-chrome

- To run all tests in headed mode in Chrome:
    npm run allTests-chrome-headed    

- To run all tests in headless mode in Firefox:
    npm run allTests-firefox

- To run all tests on Chrome and Firefox in headless mode: 
    npm run allTests-multiBrowser

Notes-

Tests in each spec file have a comment such as: smoke, regression, negative to indicate the type of test. This would have ideally been done using 'cypress-tags' ('tagify') but unfortunately I didn't have the time to do so. 

In order to remove dependency between tests in each spec file, I have chosen to sign in for each test. This way the tests can be executed in any order (except the tests in the cypress/e2e/create-account-with-project-and-tasks.cy.js. The tests in that spec file need to start with the first test which creates an account that is used in the subsequent tests). However, signing in for every test has the caveat of added execution time the tests. 

The spec file: cypress/e2e/create-account-with-project-and-tasks.cy.js has a full e2e test for creating an account and then adding a project and task in it before signing out. While it is a lengthy test, I chose to implement it in one fell swoop to ensure that a new user can go through the entire flow after signing up. This could also be broken into smaller tests in the spec file where  create account, create project, create task are all individual tests for the same account. To show case that, I have added another test in the spec file which allows user to add another project and task in the same account. 




