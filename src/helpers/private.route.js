import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loginPageLink } from '../constants/link.constants';

const PrivateRoute = ({ comp: Component, ...rest }) => {
  // Check if the user is loggedIn
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  return (
    <Route
      {...rest}
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={loginPageLink} />
      }
    />
  );
};

PrivateRoute.propTypes = {
  comp: PropTypes.node,
};

export default PrivateRoute;
