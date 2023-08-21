///<reference types='cypress'/>

class Logout {
    logoutUser() {
        cy.get('header > div > button')
            .find('span')
            .contains('Logout')
            .click()
        cy.get('footer > button')
            .find('span')
            .contains('Yes')
            .click()
            .wait(2000)
    }
}

export default Logout