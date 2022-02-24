import BasePage from "./basePage"


class LoginPage extends BasePage {

static usernameField() {
    return cy.get('div.login-style > .login-style')
} 

static baseurl = ("https://demo.apps.idocket.com/demo_quartz_dc")


static open() {
    cy.log("Base URL = "+this.baseurl)
    super.open(this.baseurl, null)
}

static passworField() {
    return cy.get('td > input')
}

static loginButton() {
    return cy.get('#login_button')
}

static login(username, password){
    super.setText(this.usernameField(),username)
    super.setText(this.passworField(),password)
    super.clickElement(this.loginButton())
}

}

export default LoginPage