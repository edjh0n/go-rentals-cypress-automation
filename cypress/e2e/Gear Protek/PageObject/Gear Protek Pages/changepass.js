class ChangePassword {
    changePass() {
        const newPass = "Passw0rd143"
        const email = "jason.todd123@gmail.com"
        const msg = "Must be at least 6 characters and contain 1 Numeric and 1 Uppercase"
        const err_msg = "New password is required"

        cy.get('table')
            .find('td[data-heading="Email"]')
            .each(($index) => {
                const e = $index.text()

                if(e !== email) {
                    cy.log(e)
                } else {
                    cy.wrap($index)
                        .parents('tr')
                        .children('td[data-heading="Actions"]')
                        .find('button > i')
                        .contains('lock')
                        .click({force : true})
                }
            })

            // Change Password Assertion
            cy.get('h2')
                .find('span')
                .should('contain', 'Change Password')
            cy.get('section').within(() => {
                cy.get('label')
                    .should('contain', 'New Password *')
                cy.get('div[aria-hidden="false"]')
                    .should('be.visible')
                    .and('contain', msg)
            })
            cy.get('footer').within(() => {
                cy.get('i')
                    .should('contain', 'check')
                cy.get('span')
                    .should('contain', 'Save & Close')
                    .contains('Save & Close')
                    .click()
            })   
            cy.get('section').within(() => {
                cy.get('div > div[aria-hidden="false"]')
                    .should('contain', err_msg)
                cy.get('div > input')
                    .type('pass')
                cy.get('div > button > i')
                    .contains('remove_red_eye')
                    .click({ force : true })
                    .wait(1000)
                    .click({ force : true })
            })
            cy.get('footer > button > div > span')
                    .contains('Save & Close')
                    .click()
            cy.get('section > div')
                    .find('input')
                    .clear()
                    .type(newPass)
            cy.get('footer > button > div > span')
                    .contains('Save & Close')
                    .click()
                    .wait(5000)        
    }
}

export default ChangePassword