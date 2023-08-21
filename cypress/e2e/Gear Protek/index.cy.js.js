///<reference types='cypress'/>

Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
})


// Imported Classes

import Login from "./PageObject/Gear Protek Pages/login"
import Sidebar from "./PageObject/Gear Protek Pages/sidebar"
import CreateUser from "./PageObject/Gear Protek Pages/usercreate"
import Search from "./PageObject/Gear Protek Pages/usersearch"
import Update from "./PageObject/Gear Protek Pages/update"
import ChangePassword from "./PageObject/Gear Protek Pages/changepass"
import Logout from "./PageObject/Gear Protek Pages/logout"
import Delete from "./PageObject/Gear Protek Pages/delete"

describe('Gear Protek Automation Testing', () => {

    before('Visit Page', () => {    

        cy.clearLocalStorage();        
        cy.viewport(1920, 1080)   
        
        const l = new Login()

        l.visit()
        l.assertContents()
        l.assertContentsNegative()
        l.validLogin()          
    })

    beforeEach('Sidebar Assertions and Selecting Users on the Sidebar Menu', () => {
        
        const sb = new Sidebar()

        sb.mainMenu()
        sb.settings()
        sb.hideButton()
        sb.selectUsers()        
        sb.gridSearch()
    })

    it('Create, Retrieve, Update and Delete with Assertion', () => {
        
        const cu = new CreateUser()
        const u = new Search()
        const up = new Update()
        const pass = new ChangePassword()
        const del = new Delete()
        
        // cu.newUserFormAssertion()
        // cu.createUser()
        // cu.saveUser()
        u.userSearch()
        up.updateDetails()
        pass.changePass()
        del.deleteUser()
    })

    afterEach('Logout', () => {

        const x = new Logout()

        x.logoutUser()
    })
})