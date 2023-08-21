///<reference types='cypress'/>

class CreateUser {
    newUserFormAssertion() {
        const img = "/imgs/app/user-placeholder.png"

        // Clicking New button to create new user
        cy.get('header > button')
            .find('span')
            .contains('New')
            .click() 

        // New User Form Assertion
        cy.get('div[id="dialog"]').within(() => {
            cy.get('h2')
                .should('contain', 'New User')
            cy.get('h2')
                .should('contain', 'close')
            cy.get('img')
                .should('have.attr', 'src', img)
            cy.get('span')
                .should('contain', 'upload')
            cy.get('i')
                .should('contain', 'file_upload')
            cy.get('label')
                .should('contain', 'Email *')
            cy.get('label')
                .should('contain', 'First Name')
            cy.get('label')
                .should('contain', 'Last Name')
            cy.get('label')
                .should('contain', 'Role *')
            cy.get('span')
                .should('contain', 'Affiliate *')
            cy.get('label')
                .should('contain', 'Password *')
        })
    }
    createUser() {
        
        const gmail = "@gmail.com"
        const fname = "Jason"
        const lname = "Todd"
        const email = fname + "." + lname
        const pword = "Password123"
        const role = ["Admin", "Agent", "Affiliate", "Accountant", "Partner"]
        let randomRole = role[Math.floor(Math.random() * role.length)]

        // Input valid credentials to create new user
        cy.get('section').within(() => {
            cy.get('#email')
                .type(email + gmail)
            cy.get('#first_name')
                .type(fname)
            cy.get('#last_name')
                .type(lname)
            cy.get('input[id="role"]')
                .click({force : true})
            cy.get('li')
                .should('have.length', 5)
                .each((roles, index, list) => {
                    expect(Cypress.$(roles)
                    .text())
                    .to.eq(role[index])
                })
                .contains(randomRole)
                .click()
            cy.get('#password')
                .type(pword)
        })
    }

    saveUser() {
        cy.get('footer > button')
            .find('span')
            .should('contain', 'Save & Close')
            .contains('Save & Close')
            .click()
            .wait(5000)
    }
}

export default CreateUser