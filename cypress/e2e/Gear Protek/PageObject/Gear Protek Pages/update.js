class Update {
    updateDetails() {

        const newEmail = "jason.todd123@gmail.com"
        const newFName = "Jaeson"        
        
        cy.get('input[id="email"]')
            .focus()
            .clear()
            .type(newEmail)
        cy.get('input[id="first_name"]')
            .focus()
            .clear()
            .type(newFName)
        cy.get('input[id="role"]')
            .dblclick({force : true})
        cy.get('header').within(() => {
            cy.get('input[id="status"]')
                .click({force : true})
            cy.get('ul[id="status-menu-options"]')
                .contains('Inactive')
                .click({force : true})
            cy.get('span')
                .contains('Save')
                .click()
                .wait(2000)
            cy.get('input[id="status"]')
                .click({force : true})
            cy.get('ul[id="status-menu-options"]')
                .contains('Deleted')
                .click({force : true})
            cy.get('span')
                .contains('Save')
                .click()
                .wait(2000)
            cy.get('input[id="status"]')
                .click({force : true})
            cy.get('ul[id="status-menu-options"]')
                .contains('Active')
                .click({force : true})
            cy.get('span')
                .contains('Save & Close')
                .click()
                .wait(3000)
        })
    }
}

export default Update