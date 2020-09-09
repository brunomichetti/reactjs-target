export var validate = require('validate.js');

export var passwordConstraints = {
  password: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export var emailConstraints = {
  email: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export var nameConstraints = {
  name: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export var passwordConfirmConstraints = {
  passwordConfirm: {
    presence: true,
    exclusion: {
      within: [''],
    },
    equality: 'password',
  },
};

export var genderConstraints = {
  gender: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export var signupConstraints = {
  name: nameConstraints.name,
  email: emailConstraints.email,
  password: passwordConstraints.password,
  passwordConfirm: passwordConfirmConstraints.passwordConfirm,
  gender: genderConstraints.gender,
};

export var changePasswordConstraints = {
  password: passwordConstraints.password,
  passwordConfirm: passwordConfirmConstraints.passwordConfirm,
};

export var loginConstraints = {
  email: emailConstraints.email,
  password: passwordConstraints.password,
};

export var equalPasswordsConstraints = {};

export var editProfileConstraints = {
  name: nameConstraints.name,
  password: passwordConstraints.password,
  passwordConfirm: passwordConfirmConstraints.passwordConfirm,
};
