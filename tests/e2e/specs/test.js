// https://docs.cypress.io/api/introduction/api.html

describe('App', () => {
  it('Visits the app root url', () => {
    cy.visit('/');

    // Check AppBar
    cy.contains('header > span', 'SWStarter');
    cy.get('main').should('be.visible').and('not.empty');

    // Check Search Container
    cy.contains('#search-container', 'What are you searching for?');
  });
});
