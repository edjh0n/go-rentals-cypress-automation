///<reference types='cypress'/>

class Login {
    visit() {
        cy.visit('https://portal.gorentals.dnadev.net/login')
        cy.log('Open Go Rentals Website')
    }

    getCredentials() {
        cy.fixture('go-rentals-credentials').then((data) => {
            cy.log('Get my credentials')
            cy.wait(8000)
            cy.log('Enter Credentials')
            cy.get('#email').type(data.username)
            cy.get('#password').type(data.password)
        })
    }

    login() {
        cy.contains('Log In').click()
        cy.wait(2000)
        cy.contains('Next').click()
    }
}

export default Login