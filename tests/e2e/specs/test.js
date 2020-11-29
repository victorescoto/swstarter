// https://docs.cypress.io/api/introduction/api.html

describe('App', () => {
  it('Visits the app root url', () => {
    cy.visit('/');

    // Checks AppBar
    cy.contains('header > span', 'SWStarter');
    cy.get('main').should('be.visible').and('not.empty');

    // Checks Search Container
    cy.contains('#search-container', 'What are you searching for?');

    // Checks placeholder's behaviour
    cy.get('#search-term').should('have.attr', 'placeholder', 'e.g. Chewbacca, Yoda, Boba Fett');
    cy.get('#movies').click();
    cy.get('#search-term').should('have.attr', 'placeholder', 'e.g. A New Hope, The Empire Strikes Back');

    // Checks button's disabling behaviour
    cy.get('#search-button').should('be.disabled');
    cy.get('#search-term').type('foo');
    cy.get('#search-button').should('not.disabled');
  });
});
