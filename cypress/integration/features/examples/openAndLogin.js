import LoginPage from "../../../pageobjects/loginPage"


describe('search case', ()=>{

    before(() =>{
        LoginPage.open();
    })

    it('search', ()=>{
        
        LoginPage.login('idocket','$idocket2022$')
        LoginPage.clickLoginButton();
        cy.url().should('include','judge.jsp');
         
    })
})