import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pageobjects/loginPage"

Given('User is on the login page', ()=> {
    return LoginPage.open();
  });
    
When('User enters login {string}', (username)=>{
    return LoginPage.setUsername(`${username}`)
    });

And('User enters password {string}', (password)=>{
    return LoginPage.setPassword(`${password}`)
    });
    
And('clicks login button', ()=> {
      return LoginPage.clickLoginButton()
  });

Then('User should be navigated to home page', ()=> {
      return cy.url().should('include','project');
    });

Then('User should stay on the login page', ()=> {
      return cy.url().should('include','8081');
    });

  