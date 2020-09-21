import client from 'helpers/client';

const login = (email, password) =>
  client.post('rest-auth/login/', JSON.stringify({ email, password }));

const logout = () => client.post('rest-auth/logout/');

const signup = (name, email, password1, password2, gender) =>
  client.post(
    'rest-auth/registration/',
    JSON.stringify({ name, email, password1, password2, gender })
  );

const update = (name, gender, newImg) => {
  const formdata = new FormData();
  if (name) {
    formdata.append('name', name);
  }
  if (gender) {
    formdata.append('gender', gender);
  }
  if (newImg) {
    formdata.append('profile_picture', newImg);
  }
  return client.put('rest-auth/user/', formdata);
};

const changePassword = (new_password1, new_password2) =>
  client.post(
    'rest-auth/password/change/',
    JSON.stringify({
      new_password1,
      new_password2,
    })
  );

const resetPassword = (email) =>
  client.post(
    'rest-auth/password/reset/',
    JSON.stringify({
      email: email,
    })
  );

const resetPasswordConfirm = (new_password1, new_password2, uid, token) =>
  client.post(
    'rest-auth/password/reset/confirm/',
    JSON.stringify({
      new_password1,
      new_password2,
      uid,
      token,
    })
  );

export const userService = {
  login,
  logout,
  signup,
  update,
  changePassword,
  resetPassword,
  resetPasswordConfirm,
};
