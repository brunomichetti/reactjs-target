import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import './sign-up-options.scss';

const SignUpOptions = () => {
  return (
    <div className="signup-options">
      <div className="signup-options__facebook">
        <a href="/">
          <FormattedMessage id="loginform.connectfb.text" />
        </a>
        <hr className="signup-options__hr" />
      </div>
      <div className="signup-options__sign-up">
        <Link to="/signup">
          <FormattedMessage id="loginform.signup.text" />
        </Link>
      </div>
    </div>
  );
};

export default SignUpOptions;
