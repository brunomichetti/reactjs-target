import React from 'react';
import { useIntl } from 'react-intl';

import '../style/App.scss';
import SignUpForm from '../components/users/SignUpForm';
import AppStoreContainer from '../components/app-store-container/AppStoreContainer';

const SignUpPage = () => {
  const intl = useIntl();

  return (
    <div className="main-div">
      <div className="initial-page-container">
        <p className="initial-page-container__title">
          {intl.formatMessage({
            id: 'userform.signup.text',
          })}
        </p>
        <SignUpForm />
      </div>
      <AppStoreContainer />
    </div>
  );
};

export default SignUpPage;
