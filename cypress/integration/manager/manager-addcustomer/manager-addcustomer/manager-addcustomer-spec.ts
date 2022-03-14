/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

// Manager Navigates to Add Customer page //

Given ('Manager is on the Manager Dashboard', () => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/manager');

});

When ('Manager clicks on the Add Customer button', () => {
    cy.contains('Add Customer').click();

});

Then ('Adding a customer required fields should appear', () => {
 
    cy.contains('First Name :').should('be.visible');
    cy.contains('Last Name :').should('be.visible');
    cy.contains('Post Code :').should('be.visible');
    cy.contains('Add Customer').should('be.visible');

});


