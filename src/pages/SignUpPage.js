import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import SignUpForm from 'components/users/SignUpForm/SignUpForm';
import AppStoreContainer from 'components/app-store-container/AppStoreContainer/AppStoreContainer';
import SignUpSuccess from 'components/users/SignUpSuccess/SignUpSuccess';
import CustomHamburgerMenu from 'components/common/CustomHamburgerMenu/CustomHamburgerMenu';

const SignUpPage = () => {
  const intl = useIntl();

  const [signupSuccess, setSignupSuccess] = useState(false);

  return (
    <div className="main-div">
      <div className="initial-page-container">
        <div className="initial-page-container__menu">
          <CustomHamburgerMenu isLoggedIn={false} />
        </div>
        {signupSuccess ? (
          <SignUpSuccess />
        ) : (
          <div>
            <p className="initial-page-container__title">
              {intl.formatMessage({
                id: 'userform.signup.text',
              })}
            </p>
            <SignUpForm setSignupSuccess={setSignupSuccess} />
          </div>
        )}
      </div>
      <AppStoreContainer />
    </div>
  );
};

export default SignUpPage;
