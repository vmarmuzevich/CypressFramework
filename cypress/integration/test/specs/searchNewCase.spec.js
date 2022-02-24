
import loginPage from '../pageobjects/loginPage';
import homePage from '../pageobjects/homePage';





describe('search case', ()=>{

    before(() =>{
        loginPage.open();
    })

    it('search', ()=>{
        
        loginPage.login('idocket','$idocket2022$')
        cy.url().should('include','home.jsp');
         
      
    })
})