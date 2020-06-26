import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../style/App.scss';
import SignUpForm from '../components/users/SignUpForm';
import AppStoreContainer from '../components/app-store-container/AppStoreContainer';

const SignUpPage = () => (
  <div className="main-div">
    <div className="left-container">
      <p className="left-container__title">
        <FormattedMessage id="userform.signup.text" />
      </p>
      <SignUpForm />
    </div>
    <AppStoreContainer />
  </div>
);

export default SignUpPage;
