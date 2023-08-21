class Delete {
    deleteUser() {
        const email = "jason.todd123@gmail.com"
        const confirm = "Are you sure you want to delete Jaeson Todd?"

        cy.get('table > tbody > tr')
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
                        .contains('delete')
                        .click({force : true})                 
                }
            })
        cy.get('h2').within(() => {
            cy.get('div')
                .should('contain', 'Delete Confirmation')
            cy.get('i')
                .should('contain', 'close')
        })
        cy.get('section')
            .find('h3')
            .should('contain', confirm)
        cy.get('footer').within(() => {
            cy.get('i')
                .should('contain', 'close')
            cy.get('span')
                .should('contain', 'No')
            cy.get('i')
                .should('contain', 'check')
            cy.get('span')
                .should('contain', 'Yes')
                .contains('Yes')
                .click()
        })
    }
}

export default Delete