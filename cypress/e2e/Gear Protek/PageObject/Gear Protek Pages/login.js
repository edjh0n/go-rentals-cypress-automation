///<reference types='cypress'/>

class Login {
    visit() {
        cy.visit('https://gearprotek.dnaqa.net/login')
        cy.url().should('include', 'https://gearprotek.dnaqa.net/login')
    }

    assertContents() {

        let logo = './imgs/app/logo_full.png'
        let para = 'Enter your email and password...'        
        let fp = 'Forgot Password'
        let rre = 'remove_red_eye'
        let fyp = 'Forgot Your Password?'
        let para_2 = 'Enter your email address and we will send you a message to reset your password.'
        let eir = 'Email is required'

    
        // Content Assertions
        // cy.wait(1000)
        cy.get('.screenLogin') // Header Logo
            .find('img')
            .should('have.attr', 'src', logo)
            // .wait(1000)
        cy.get('.screenLogin') // Login Header 2
            .find('h2')
            .should('contain', 'Login')
            // .wait(1000)
        cy.get('.screenLogin__cardMessage')
            .contains(para)
            .should('not.be.visible')
            // .wait(1000)

        // Form Assertion
        cy.get('section').within(() => {
            cy.get('label')     // Email and Password Assertions
                .should('contain', 'Email*')
                .and('contain', 'Password*')
                // .wait(1000)
            cy.get('i')         // Icons Assertions
                .should('contain', 'person')
                .and('contain', 'lock')
                .and('contain', rre)
                // .wait(1000)
            cy.get('button')    // Button Assertions
                .should('contain', 'Login')
                .and('contain', fp)
                .contains(fp)
                .click()
                // .wait(1000)
        })

        // Forgot Password Positive and Negative Assertion
        cy.get('[class="md-card-title--title md-card-title--large md-text"]')
            .should('contain', fyp)
            // .wait(1000)
        cy.get('[class="screenPassword__resetPasswordMessage"]')
            .should('contain', para_2)
            // .wait(1000)
        cy.get('[class="md-card-text"]') // Email Label
            .find('label')
            .should('contain', 'Email *')            
        cy.get('.md-text-field-icon-container') // Email Icon
            .find('i')
            .should('contain', 'email')
        cy.log('This assertion below is to assert ' + '"' + eir + '"' + ' if it is not exist in the DOM')
        cy.get('[class="md-text-field-message md-text-field-message--active"]')
            .should('not.exist')
        cy.get('[class="md-btn md-btn--raised md-btn--text md-pointer--hover md-background--primary md-background--primary-hover md-inline-block"]')        // Clicking the button to trigger the validation message
            .contains('Reset Password')
            .click()
            .log('Clicking the Reset Button to trigger the validation message.')
            // .wait(1000)
        cy.get('[class="md-text-field-message md-text-field-message--active"]')     // Email validation message Assertion
            .should('contain', eir)
            // .wait(1000)

        // Forgot Password Button Section Assertion
        cy.get('section > .screenPassword__buttons').within(() => {
            cy.get('i')
                .should('contain', 'arrow_back')
                // .wait(1000)
            cy.get('span')
                .should('contain', 'Back to Login')
                // .wait(1000)
            cy.get('button')
                .contains('Back to Login')
                .click()
                // .wait(1000)
        })
    }

    assertContentsNegative() {
        let er = 'Email is required'
        let pr = 'Password is required'
        let ei = 'Email is invalid'
        let acct = 'Account does not exist'
        let ip = 'Incorrect password'
        let email = 'qa@dnamicro.com'
        let xEmail = 'qa@dnamicro'
        let xx_em = 'qa123@dnamicro.com'
        let pass = 'DNAR0cks!!'
        let xPass = 'xpassword'

        // Assertion for validation message if its not exist if its not trigger
        cy.get('form').within(($form) => {
            cy.get('[class="md-text-field-message md-text-field-message--active"]')
                .should('not.exist')
                .log('This assertion is for ' + '"' + er + '"' + ' ,' + '"' + pr + '"' + ' and ' + '"' + ei + '"' + ' if its not exist in the DOM.')
            cy.get('.screenLogin__cardMessage  show')
                .should('not.exist')
                .log('This assertion is for ' + '"' + acct + '"' + ' and ' + '"' + ip + '"' + ' if its not exist in the DOM.' )
        })

        // Negative Assertion
        cy.get('div > .screenLogin__form').within(() => {
            cy.get('#email')        // Input invalid Email
                .type(xEmail)            
            cy.get('button')
                .contains('Login')
                .click()
            cy.get('[class="md-text-field-message md-text-field-message--active"]')         // Assertion Email Validation for Invalid email
                .should('contain', ei)
                .and('contain', pr)
            cy.get('#email')        // Clear Email field and Input Email that does not Exist
                .focus()
                .clear()
                .type(xx_em)
            cy.get('#password')
                .type(pass)
            cy.get('button')
                .contains('Login')
                .click()
            cy.get('[class="screenLogin__cardMessage  show"]')           // Asserting Email Validation for Email that does not exist
                .find('p')
                .should('contain', acct)
            cy.get('#email')        
                .focus()
                .clear()            // Clear field
                .type(email)        // Input Valid Email
            cy.get('#password')     
                .focus()
                .clear()            // Clear field
                .type(xPass)        // Input Incorrect Password
            cy.get('button')
                .contains('Login')
                .click()
            cy.get('[class="screenLogin__cardMessage  show"]')           // Asserting Password validation for Incorrect password
                .find('p')
                .should('contain', ip)
            cy.get('#email')
                .focus()
                .clear()
            cy.get('#password')
                .focus()
                .clear()
        })
    }

    validLogin() {

        let email = 'qa@dnamicro.com'
        let pass = 'DNAR0cks!!'

        // Login with Valid Credentials
        cy.get('section').within(() => {
            cy.get('#email')
                .type(email)
            cy.get('#password')
                .type(pass)
            cy.get('button')        // Submit to Login Successfully
                .contains('Login')
                .click()
        })

        cy.wait(6000)
    }
    
}

export default Login