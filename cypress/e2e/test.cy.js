describe('ParaBank Test', () => {
  it('Verify website url is working', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  })
  it('Verify logo exist', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('.logo')
      .should('exist')
  })
  it('Verify Left Menu', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })
  })