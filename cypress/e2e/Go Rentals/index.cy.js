///<reference types='cypress'/>

Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})

// Imported Classes

import Login from "./PageObject/login.cy"
import Booking from "./PageObject/booking.cy"


describe('Go Rentals - Booking Creation', () => {
    before('Visit Page', () => {

        cy.clearAllSessionStorage()
        // cy.viewport(1920, 1080)

        const lgn = new Login()

        lgn.visit()
        lgn.getCredentials()
        lgn.login()
        cy.wait(10000)
    })

    it('Open Booking', () => {
        const bkg = new Booking() 

        bkg.openBooking()
        // bkg.clickNew()
        bkg.searchData()
        bkg.clickDataSearch()
        bkg.clickData()
    })
})