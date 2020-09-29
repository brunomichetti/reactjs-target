import React from 'react';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import smilies from 'assets/smilies.png';

const SignUpSuccess = () => {
  const intl = useIntl();
  return (
    <div className="signup-success">
      <div className="initial-page-container__smilies">
        <img src={smilies} alt="smilies" />
      </div>
      <p className="initial-page-container__app-title">
        {intl.formatMessage({
          id: 'signup.success.yey.text',
        })}
      </p>
      <p className="initial-page-container__app-subtitle">
        {intl.formatMessage({
          id: 'signup.success.only.one.step.text',
        })}
      </p>
      <p className="initial-page-container__app-title">TARGET</p>
      <div className="initial-page-container__description-text-container">
        <p className="initial-page-container__description-text">
          {intl.formatMessage({
            id: 'signup.success.check.email',
          })}
        </p>
      </div>
    </div>
  );
};

export default SignUpSuccess;
