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
    cy.get('#search-term').type('hope');
    cy.get('#search-button').should('not.disabled');

    cy.intercept({ method: 'GET', url: 'https://swapi.dev/api/films/?search=hope' }).as('searchMovies');

    // Checks search behaviour
    cy.get('#search-button').click();
    cy.contains('#search-container', 'Searching...');
    cy.wait('@searchMovies').then((interception) => {
      assert.isNotNull(interception.response.body, '1st API call has data');
    });
    cy.get('.result-item').should('be.visible');

    // Checks details page
    cy.get('.result-item > button').click();
    cy.url().should('include', '/details');
  });
});
