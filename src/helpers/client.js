import axios, { axiosCall } from 'axios';

import { loginPageLink } from '../constants/link.constants';
import { history } from '../helpers/history';

require('dotenv').config();

const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

client.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (
      error.config.url != 'rest-auth/login/' &&
      error.config.url != 'rest-auth/registration/' &&
      error.config.url != 'rest-auth/logout/'
    ) {
      if (error.response.status == 401) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          try {
            const {
              data: { access: accessToken },
            } = await axios.post(
              process.env.REACT_APP_BASE_URL + 'rest-auth/token/refresh/',
              { refresh: refreshToken }
            );
            error.config.headers['Authorization'] = 'Bearer ' + accessToken;
            localStorage.setItem('accessToken', accessToken);
            return axios(error.config); // Retry original request but with refreshed access token
          } catch (error) {
            localStorage.removeItem('user');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('accessToken');
            history.push(loginPageLink);
          }
        }
      }
      throw error;
    }
  }
);

export default client;
