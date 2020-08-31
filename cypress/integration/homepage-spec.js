describe('Test home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Test text', () => {
    cy.contains('TARGET MVD');
    cy.contains('Find people near you & connect');
    cy.contains(
      'Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and start conecting with others who share your interest.'
    );
    cy.contains('EMAIL');
    cy.contains('PASSWORD');
    cy.contains('Forgot your password?');
    cy.contains('CONNECT WITH FACEBOOK');
    cy.contains('SIGN UP');
  });

  it('Test login inputs', () => {
    cy.get('input[name="email"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
    cy.get('input[name="password"]')
      .type('fakepassword')
      .should('have.value', 'fakepassword');
  });

  it('Test empty inputs', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.user-form__alert').then((alerts) => {
      const [emailAlert, passwordAlert] = alerts;
      cy.expect(emailAlert.textContent).to.equal('Email is required.');
      cy.expect(passwordAlert.textContent).to.equal('Password is required.');
    });
  });

  it('Test links', () => {
    cy.get('a[href="/signup"]').click();
    cy.url().should('eq', 'http://localhost:3000/signup');
  });
});
