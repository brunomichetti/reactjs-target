import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { signupPageLink, loginPageLink } from '../../constants/link.constants';

import './sign-up-options.scss';

const SignUpOptions = () => (
  <div className="signup-options">
    <div className="signup-options__facebook">
      <a href={loginPageLink}>
        <FormattedMessage id="userform.connectfb.text" />
      </a>
      <hr className="signup-options__hr" />
    </div>
    <div className="signup-options__sign-up">
      <Link to={signupPageLink}>
        <FormattedMessage id="userform.signup.text" />
      </Link>
    </div>
  </div>
);

export default SignUpOptions;