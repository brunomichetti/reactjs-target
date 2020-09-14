describe('Signup form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup/');
  });

  describe('Name input', () => {
    it('Should have the label', () => {
      cy.contains('NAME');
    });

    describe('When the entered value is valid', () => {
      it('Should display the value correctly', () => {
        cy.get('input[name="name"]')
          .type('Fake Name')
          .should('have.value', 'Fake Name');
      });
    });

    describe('When is empty and user submits', () => {
      it('Should display an error', () => {
        cy.get('button[type="submit"]').click();
        cy.get('.user-form__alert').then((alerts) => {
          cy.expect(alerts[0].textContent).to.equal('Name is required.');
        });
      });
    });
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
          cy.expect(alerts[1].textContent).to.equal('Email is required.');
        });
      });
    });
  });

  describe('Password input', () => {
    it('Should have the label', () => {
      cy.contains('PASSWORD');
    });

    it('Should have the placeholder', () => {
      cy.get('input[name="password"]').should(
        'have.attr',
        'placeholder',
        'MIN. 8 CHARACTERS LONG'
      );
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
          cy.expect(alerts[2].textContent).to.equal('Password is required.');
        });
      });
    });
  });

  describe('Password confirm input', () => {
    it('Should have the label', () => {
      cy.contains('CONFIRM PASSWORD');
    });

    describe('When the entered value is valid', () => {
      it('Should display the value correctly', () => {
        cy.get('input[name="passwordConfirm"]')
          .type('fakepassword')
          .should('have.value', 'fakepassword');
      });
    });

    describe('When is empty and user submits', () => {
      it('Should display an error', () => {
        cy.get('button[type="submit"]').click();
        cy.get('.user-form__alert').then((alerts) => {
          cy.expect(alerts[3].textContent).to.equal(
            'Password confirmation is required.'
          );
        });
      });
    });

    describe('When password and password confirmaton does not match and user submits', () => {
      it('Should show a not matching error', () => {
        cy.get('input[name="password"]')
          .type('fakepassword')
          .should('have.value', 'fakepassword');
        cy.get('input[name="passwordConfirm"]')
          .type('fakepassword-not-equal')
          .should('have.value', 'fakepassword-not-equal');
        cy.get('button[type="submit"]').click();
        cy.get('.user-form__alert').then((alerts) => {
          cy.expect(alerts[2].textContent).to.equal(
            'Password and password confirmation must match.'
          );
        });
      });
    });
  });

  describe('Gender input', () => {
    it('Should have the label', () => {
      cy.contains('GENDER');
    });

    describe('When user types the possibilites', () => {
      it('Should work MALE value correctly', () => {
        cy.get('#react-select-2-input').type('MALE{enter}', { force: true });
        cy.get('div[class=" css-1uccc91-singleValue"]').should(
          'have.text',
          'MALE'
        );
      });
      it('Should work FEMALE value correctly', () => {
        cy.get('#react-select-2-input').type('FEMALE{enter}', { force: true });
        cy.get('div[class=" css-1uccc91-singleValue"]').should(
          'have.text',
          'FEMALE'
        );
      });
      it('Should work NOT SPECIFIED value correctly', () => {
        cy.get('#react-select-2-input').type('NOT SPECIFIED{enter}', {
          force: true,
        });
        cy.get('div[class=" css-1uccc91-singleValue"]').should(
          'have.text',
          'NOT SPECIFIED'
        );
      });
    });
  });

  describe('Signin link', () => {
    it('Should take the user to the login page', () => {
      cy.get('a[href="/login"]').click();
      cy.url().should('eq', 'http://localhost:3000/login');
    });
  });
});
