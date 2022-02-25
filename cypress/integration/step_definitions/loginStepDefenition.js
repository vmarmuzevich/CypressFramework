
import { Given, And, Then, When }  from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pageobjects/homePage";
import loginPage from "../../pageobjects/loginPage";


Given('User on the login page', ()=> {
    return loginPage.open()
  });
    
When('User enters valid username {string} and valid password {string}', (username, password)=>{
        loginPage.login(username, password)
  });
    
When('User enters invalid username {string} and password {string}', (username, password)=> {
        loginPage.login(username, password)
  });
    
And('clicks login button', ()=> {
      return loginPage.clickLoginButton()
  });

Then('User should be navigated to home page', ()=> {
      return homePage.open()
    });
    
Then('User should see error message.', ()=> {
        loginPage.errorMessage().should('have','failed')
  });
    
    





