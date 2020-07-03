import client from '../helpers/client';

const login = (email, password) => {
  return client.post('rest-auth/login/', JSON.stringify({ email, password }));
};

const logout = () => {
  return client.post('rest-auth/logout/');
};

const signup = (name, email, password1, password2, gender) => {
  return client.post(
    'rest-auth/registration/',
    JSON.stringify({ name, email, password1, password2, gender })
  );
};

export const userService = {
  login,
  logout,
  signup,
};
