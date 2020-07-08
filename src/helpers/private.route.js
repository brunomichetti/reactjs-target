import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loginPageLink } from '../constants/link.constants';

const PrivateRoute = ({ comp: Component, ...rest }) => {
  // Check if the user is loggedIn
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to={loginPageLink} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  comp: PropTypes.node,
};

export default PrivateRoute;
