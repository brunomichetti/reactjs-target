describe('Test signup page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/signup/');
  });

  it('Test text', () => {
    cy.contains('SIGN UP');
    cy.contains('NAME');
    cy.contains('EMAIL');
    cy.contains('PASSWORD');
    cy.contains('CONFIRM PASSWORD');
    cy.contains('GENDER');
    cy.get('input[name="password1"]').should(
      'have.attr',
      'placeholder',
      'MIN. 8 CHARACTERS LONG'
    );
  });

  it('Test signup inputs', () => {
    cy.get('input[name="name"]')
      .type('Fake Name')
      .should('have.value', 'Fake Name');
    cy.get('input[name="email"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
    cy.get('input[name="password1"]')
      .type('fakepassword')
      .should('have.value', 'fakepassword');
    cy.get('input[name="password2"]')
      .type('fakepassword')
      .should('have.value', 'fakepassword');

    cy.get('#react-select-2-input').type('MALE{enter}', { force: true });
    cy.get('div[class=" css-1uccc91-singleValue"]').should('have.text', 'MALE');

    cy.get('#react-select-2-input').type('FEMALE{enter}', { force: true });
    cy.get('div[class=" css-1uccc91-singleValue"]').should(
      'have.text',
      'FEMALE'
    );

    cy.get('#react-select-2-input').type('NOT SPECIFIED{enter}', {
      force: true,
    });
    cy.get('div[class=" css-1uccc91-singleValue"]').should(
      'have.text',
      'NOT SPECIFIED'
    );
  });

  it('Test empty inputs', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.user-form__alert').then((alerts) => {
      const [
        nameAlert,
        emailAlert,
        passwordAlert,
        passwordConfirmAlert,
        genderAlert,
      ] = alerts;
      cy.expect(nameAlert.textContent).to.equal('Name is required.');
      cy.expect(emailAlert.textContent).to.equal('Email is required.');
      cy.expect(passwordAlert.textContent).to.equal('Password is required.');
      cy.expect(passwordConfirmAlert.textContent).to.equal(
        'Password confirmation is required.'
      );
      cy.expect(genderAlert.textContent).to.equal('Gender is required.');
    });
  });

  it('Test not matching passwords', () => {
    cy.get('input[name="password1"]')
      .type('fakepassword')
      .should('have.value', 'fakepassword');
    cy.get('input[name="password2"]')
      .type('fakepassword-not-equal')
      .should('have.value', 'fakepassword-not-equal');
    cy.get('button[type="submit"]').click();
    cy.get('.user-form__alert').then((alerts) => {
      const passwordConfirmAlert = alerts[2];
      cy.expect(passwordConfirmAlert.textContent).to.equal(
        'Password and password confirmation must match.'
      );
    });
  });

  it('Test links', () => {
    cy.get('a[href="/login"]').click();
    cy.url().should('eq', 'http://localhost:3000/login');
  });
});
