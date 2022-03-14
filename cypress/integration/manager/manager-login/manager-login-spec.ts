/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given ('the Manager is at the website', () => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login');

});

When ('the Manager clicks Bank Manager Login button', () => {
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click();

});

Then('the Manager is redirected to Manager Dashboard', () => {
  cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/manager');

});

