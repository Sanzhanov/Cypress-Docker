describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/testing-with-cypress')
  });

  it('Verify header', () => {
    cy.get('h1').should('be.visible').and('contains.text', 'Testing with Cypress')
  })

  it('Verify slogan', () => {
    cy.get('h2').should('be.visible').and('contains.text', 'Test smarter, not harder with Cypress.')
  })

  it('Verify button set', () => {
    cy.get('.buttonSet li').should('be.visible').and('have.length', 3)
  })
})