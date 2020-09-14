describe('Test home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Page text', () => {
    it('Should have title, subtitle and description', () => {
      cy.contains('TARGET MVD');
      cy.contains('Find people near you & connect');
      cy.contains(
        'Create a target wherever on the map, specify your interest: Travel, Dating, Music, etc and start conecting with others who share your interest.'
      );
    });
    it('Should contain forgot password option', () => {
      cy.contains('Forgot your password?');
    });
    it('Should have facebook option', () => {
      cy.contains('CONNECT WITH FACEBOOK');
      cy.contains('SIGN UP');
    });
  });

  describe('Signup link', () => {
    it('Should take the user to the signup page', () => {
      cy.get('a[href="/signup"]').click();
      cy.url().should('eq', 'http://localhost:3000/signup');
    });
  });
});
