import BasePage from "./basePage"


class HomePage extends BasePage {
    

static searchTab() {
    cy.get('.navbar-left > :nth-child(3) > :nth-child(1)')
}

static hoverOverSearchTab(containText) {
    cy.contains(containText).trigger('mouseover')
}
 

}

export default HomePage