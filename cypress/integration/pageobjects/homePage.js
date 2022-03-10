import BasePage from "./basePage"


class HomePage extends BasePage {

static baseurl = ("/")
    

static searchTab() {
    cy.get('.navbar-left > :nth-child(3) > :nth-child(1)')
}

static hoverOverSearchTab(containText) {
    cy.contains(containText).trigger('mouseover')
}

static open() {
    cy.log("Base URL = "+this.baseurl)
    super.open(this.baseurl, 'login.jsp')
}
 

}

export default HomePage