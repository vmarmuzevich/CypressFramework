/// <reference types="cypress" />

import LoginPage from "../../../pageobjects/loginPage"

//const allure = Cypress.Allure.reporter.getInterface();
describe('Check the Page Navigation', () => {

    it('Verify page title', ()=>{
        LoginPage.open();
        LoginPage.login(login,password)

        cy.visit('https://demo.apps.idocket.com/demo_quartz_dc/login.jsp');
        cy.url().should('include', 'login.jsp');
        cy.get('div.login-style > .login-style').type('idocket');
        cy.get('td > input').type('$idocket2022$');
        //cy.get('#login_button').click();
        cy.get('td div .login-style').then((label) => {
           cy.log(label.text());
           cy.allure()

        
        })
        //cy.get('a').contains('Work From').click()
        //cy.get('a').its('length').then((links)=>{
        //    cy.log(links).drag
       // })
        



    })
})