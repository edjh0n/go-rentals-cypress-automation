class Search {
    userSearch() {

        // Finding the newly created at the grid
        cy.log('Finding the newly created at the grid')
        const email = "jason.todd@gmail.com"

        cy.get('table').within(() => {
            cy.get('td[data-heading="Email"]')
            .each(($index) => {
                const e = $index.text()

                if(e !== email) {
                    cy.log(e + ' is not the email')
                } else {
                    cy.wrap($index).click()
                }
            })
        })
    
    }
    
}

export default Search