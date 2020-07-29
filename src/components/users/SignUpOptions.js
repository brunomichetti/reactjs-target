import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

import { signupPageLink, loginPageLink } from '../../constants/link.constants';

import './sign-up-options.scss';

const SignUpOptions = ({ intl }) => (
  <div className="signup-options">
    <div className="signup-options__facebook">
      <a href={loginPageLink}>
        {intl.formatMessage({
          id: 'userform.connectfb.text',
        })}
      </a>
      <hr className="signup-options__hr" />
    </div>
    <div className="signup-options__sign-up">
      <Link to={signupPageLink}>
        {intl.formatMessage({
          id: 'userform.signup.text',
        })}
      </Link>
    </div>
  </div>
);

SignUpOptions.propTypes = {
  intl: object,
};

export default SignUpOptions;
