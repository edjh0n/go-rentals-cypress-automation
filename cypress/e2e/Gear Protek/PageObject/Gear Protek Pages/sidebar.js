///<reference types='cypress'/>

class Sidebar {

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

        cy.get('table > thead').within(() => {
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

export default Sidebar