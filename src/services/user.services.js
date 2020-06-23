import client from '../helpers/client';

const login = (email, password) => {
  return client.post('rest-auth/login/', JSON.stringify({ email, password }));
};

const logout = () => {
  return client.post('rest-auth/logout/');
};

export const userService = {
  login,
  logout,
};
