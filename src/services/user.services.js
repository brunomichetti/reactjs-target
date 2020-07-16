import client from '../helpers/client';

const login = (email, password) =>
  client.post('rest-auth/login/', JSON.stringify({ email, password }));

const logout = () => client.post('rest-auth/logout/');

const signup = (name, email, password1, password2, gender) =>
  client.post(
    'rest-auth/registration/',
    JSON.stringify({ name, email, password1, password2, gender })
  );

export const userService = {
  login,
  logout,
  signup,
};
