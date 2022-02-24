

export default class BasePage {

    static setText(element, text) {
       return element.type(text);
    }

    static clickElement(element) {
       return element.click();
    }

    static open(url, path) {
        console.log("Path = " + path);
        if (path == null) {
            return cy.visit(url)
        } else {
            return cy.visi(url+"/"+path)
        }
    }


}