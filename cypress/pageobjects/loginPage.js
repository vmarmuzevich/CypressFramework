import BasePage from "./basePage"


class LoginPage extends BasePage {

static usernameField() {
    return cy.get('div.login-style > .login-style')
} 

static baseurl = ("/")

static errorMessage() {
    return cy.get('.msgred br').then(message=> {
        message.text()
    })
}

static open() {
    cy.log("Base URL = "+this.baseurl)
    super.open(this.baseurl, 'login.jsp')
}

static passworField() {
    return cy.get('td > input')
}

static loginButton() {
    return cy.get('#login_button')
}

static clickLoginButton(){
    super.clickElement(this.loginButton())
}

static login(username, password){
    super.setText(this.usernameField(),username)
    super.setText(this.passworField(),password)
}

}

export default LoginPage