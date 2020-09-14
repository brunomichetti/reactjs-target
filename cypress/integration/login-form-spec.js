describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Email input', () => {
    it('Should have the label', () => {
      cy.contains('EMAIL');
    });

    describe('When the entered value is valid', () => {
      it('Should display the value correctly', () => {
        cy.get('input[name="email"]')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com');
      });
    });

    describe('When is empty and user submits', () => {
      it('Should display an error', () => {
        cy.get('button[type="submit"]').click();
        cy.get('.user-form__alert').then((alerts) => {
          const emailAlert = alerts[0];
          cy.expect(emailAlert.textContent).to.equal('Email is required.');
        });
      });
    });
  });

  describe('Password input', () => {
    it('Should have the label', () => {
      cy.contains('PASSWORD');
    });

    describe('When the entered value is valid', () => {
      it('Should display the value correctly', () => {
        cy.get('input[name="password"]')
          .type('fakepassword')
          .should('have.value', 'fakepassword');
      });
    });

    describe('When is empty and user submits', () => {
      it('Should display an error', () => {
        cy.get('button[type="submit"]').click();
        cy.get('.user-form__alert').then((alerts) => {
          const passwordAlert = alerts[1];
          cy.expect(passwordAlert.textContent).to.equal(
            'Password is required.'
          );
        });
      });
    });
  });
});
