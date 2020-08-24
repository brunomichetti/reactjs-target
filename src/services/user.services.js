import client from '../helpers/client';

const login = (email, password) =>
  client.post('rest-auth/login/', JSON.stringify({ email, password }));

const logout = () => client.post('rest-auth/logout/');

const signup = (name, email, password1, password2, gender) =>
  client.post(
    'rest-auth/registration/',
    JSON.stringify({ name, email, password1, password2, gender })
  );

const update = (name, gender) =>
  client.put('rest-auth/user/', JSON.stringify({ name, gender }));

const changePassword = (password, confirmNewPassword) =>
  client.post(
    'rest-auth/password/change/',
    JSON.stringify({
      new_password1: password,
      new_password2: confirmNewPassword,
    })
  );

const resetPassword = (email) =>
  client.post(
    'rest-auth/password/reset/',
    JSON.stringify({
      email: email,
    })
  );

export const userService = {
  login,
  logout,
  signup,
  update,
  changePassword,
  resetPassword,
};
