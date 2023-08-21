class Portal {

    // Sidebar main menu assertion
    mainMenu() {

        const menuLists = [
            "Dashboard",
            "Timeline",
            "Users",
            "Customers",
            "Calls",
            "Registrations",
            "Purchase",
            "Repair Shops",
            "Affiliates",
            "Claim Reports",
            "Settingskeyboard_arrow_down"
        ]        

        cy.get('nav')
            .find('ul > li')
            .each((menu, index, list) => {
                expect(Cypress.$(menu)
                .text())
                .to.eq(menuLists[index])
            })
            .contains('Settings')
            .click()
            .wait(1000)        
    }

    // Settings sub menu assertion
    settings() {
        const settings = [
            "Category",
            "Brand",
            "Registration Survey",
            "Plans",
            "Company",
            "Languages",
            "Regions",
            "Administrators",
            "Underwriters",
            "Support"
        ]

        cy.get('[class="md-list-item md-list-item--nested-container"]')
            .find('ul > li')
            .each((sub, index, list) => {
                expect(Cypress.$(sub)
                .text())
                .to.eq(settings[index])
            })
    }

    // Hide button assertion
    hideButton() {
        cy.get('nav > button')
            .find('i')
            .contains('keyboard_arrow_left')
            .click()
            .wait(1000)
            .contains('keyboard_arrow_right')
            .click()
    }

    // Selecting User
    selectUsers() {
        cy.get('nav')
            .find('ul > li')
            .contains('Users')
            .click()
            .wait(5000)
    }

    usersHeader() {
        cy.get('header').within(($header) => {
            cy.get('button')
                .find('span')
                .should('contain', 'New')
            cy.get('button')
                .find('span')
                .should('contain', 'Export as CSV')
            
        })
    }

    gridHeader() {
        cy.get('.dnaTable2')
            .find('h2')
            .contains('All Users')
            .should('contain', 'All Users')
            .wait(2000)
    }

    filter() {
        cy.get('[class="dnaTable2-tabContent-container"]').within(($div) => {
            cy.get('#filter-entity-toggle-menu-button-toggle')
                .find('span')
                .should('contain', 'Filter Users')
                .contains('Filter Users')
                .click()
                .wait(1000)
            cy.get('#filter-entity-toggle-menu-button-list')
                .find('span')
                .should('contain', 'Show all Users where:')
            cy.get('#filter-entity-toggle-menu-button-list')
                .find('.Select-placeholder')
                .should('contain', 'Select a filter')
            cy.get('.dnaTable2-searchForm').within(($div) => {
                cy.get('#dnaTable2-searchField')
                    .should('have.attr', 'placeholder', 'Search Users...')
                    .focused()
                cy.get('.Select-control')
                    .find('#filter-company')
                    .click()
                    .focused()
                    .wait(2000)

                const userFilter = [
                    "Email",
                    "First Name",
                    "Last Name",
                    "Role",
                    "Affiliate",
                    "Status"
                ]
                let randomFilter = userFilter[Math.floor(Math.random() * userFilter.length)]

                cy.get('.Select-menu-outer')
                    .find('[role="option"]')
                    .should('have.length', 6)
                    .each((filter, index, list) => {
                        expect(Cypress.$(filter)
                        .text())
                        .to.eq(userFilter[index])
                    })
                cy.get('.Select-menu')
                    .contains(randomFilter)
                    .click()
                cy.wait(2000)
                cy.get('#filter-entity-toggle-menu-button-list')
                    .find('span')
                    .should('contain', 'is')
            })
        })
    }

    createUser() {

        const email = "peter.parker@gmail.com"
        const fname = "Peter"
        const lname = "Parker"
        const pword = "Password123"
        const role = ["Admin", "Agent", "Affiliate", "Accountant", "Partner"]
        let randomRole = role[Math.floor(Math.random() * role.length)]
        

        cy.get('header > button')
            .find('span')
            .contains('New')
            .click()
        cy.get('.md-grid').within(($div) => {
            cy.get('#email')
                .type(email)
            cy.get('#first_name')
                .type(fname)
            cy.get('#last_name')
                .type(lname)
            cy.get('#role-toggle')
                .find('span')
                .click({force :true})
            cy.get('#role-menu-options')
                .find('li')
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
    }

    gridSearch() {
        
        const tH = [
            "Email",
            "First Name",
            "Last Name",
            "Role",
            "Affiliate",
            "Status",
            "Actions"
        ]

        cy.get('table > thead').within(($table) => {
            cy.get('tr')
                .find('th')
                .should('have.length', 7)
            cy.get('th')
                .find('span')
                .each((table, index, list) => {
                    expect(Cypress.$(table)
                    .text())
                    .to.eq(tH[index])
                })
        })                        
    }
}

export default Portal