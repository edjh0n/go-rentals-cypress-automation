///<reference types='cypress'/>

class Booking {
    openBooking () {
        cy.get(':nth-child(1) > .gap-3 > .whitespace-nowrap')
        .click()
    }

    clickNew () {
        cy.get('span > .gap-1')
        .click()
    }

    searchData() {
        cy.get('.align-middle > .relative > .flex-wrap > .flex > .sc-fPXMVe')
        .type('GO1009490')
        .wait(2000)
    }

    clickDataSearch() {
        cy.get('.absolute > .flex > .cursor-pointer > .inline-flex')
        .click()
        .wait(2000)
    }

    clickData() {
        cy.get('.tbody').within(() => {
            cy.get('.tr')
                .click()
                .wait(5000)
        })
    }
}

export default Booking