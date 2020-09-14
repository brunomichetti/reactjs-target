export const passwordConstraints = {
  password: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export const emailConstraints = {
  email: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export const nameConstraints = {
  name: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export const passwordConfirmConstraints = {
  passwordConfirm: {
    presence: true,
    exclusion: {
      within: [''],
    },
    equality: 'password',
  },
};

export const genderConstraints = {
  gender: {
    presence: true,
    exclusion: {
      within: [''],
    },
  },
};

export const signupConstraints = {
  name: nameConstraints.name,
  email: emailConstraints.email,
  password: passwordConstraints.password,
  passwordConfirm: passwordConfirmConstraints.passwordConfirm,
  gender: genderConstraints.gender,
};

export const changePasswordConstraints = {
  password: passwordConstraints.password,
  passwordConfirm: passwordConfirmConstraints.passwordConfirm,
};

export const loginConstraints = {
  email: emailConstraints.email,
  password: passwordConstraints.password,
};

export const editProfileConstraints = {
  name: nameConstraints.name,
  passwordConfirm: { equality: 'password' },
};
