import BasePage from "./basePage"


class LoginPage extends BasePage {

static usernameField() {
    return cy.get('#login')
} 

static baseurl = ("/")

static errorMessage() {
    return cy.get('.msgred br').then(message=> {
        message.text()
    })
}

static open() {
    cy.log("Base URL = "+this.baseurl)
    super.open(this.baseurl, null)
}

static passworField() {
    return cy.get('#password')
}

static loginButton() {
    return cy.get('.button')
}

static clickLoginButton(){
    super.clickElement(this.loginButton())
}

static login(username, password){
    super.setText(this.usernameField(),username)
    super.setText(this.passworField(),password)
}

static setUsername(username){
    super.setText(this.usernameField(),username)
}

static setPassword(password){
    super.setText(this.passworField(),password)
}




}

export default LoginPage