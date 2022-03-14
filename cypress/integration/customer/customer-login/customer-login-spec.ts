/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Customer navigates to Customer Dashboard

Given ('Customer is on the Home page', () => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login');

});

When  ('Customer clicks on the Customer Login button', () => {
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(1) > button').click ();

});

Then   ('Customer should be redirected to Customer Dashboard', () => {
    cy.get('[id^=userSelect]').should('be.visible');

});

