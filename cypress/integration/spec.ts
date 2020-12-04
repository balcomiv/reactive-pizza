it('loads home page', () => {
  cy.visit('/');
  cy.contains('reactive-pizza app is running!');
});
