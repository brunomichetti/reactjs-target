import React from 'react';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

import 'style/App.scss';
import AppStoreContainer from 'components/app-store-container/AppStoreContainer';
import ResetPasswordForm from 'components/users/ResetPasswordForm';
import smilies from 'assets/smilies.png';

const ResetPasswordPage = () => {
  const { uid, token } = useParams();

  const intl = useIntl();

  return (
    <div className="main-div">
      <div className="initial-page-container initial-page-container__reset-password-text">
        <div className="initial-page-container__reset-password-smilies">
          <img src={smilies} alt="smilies" />
        </div>
        <p className="initial-page-container__app-title">TARGET MVD</p>
        <p className="initial-page-container__description-text">
          {intl.formatMessage({
            id: 'enter.new.password.text',
          })}
        </p>
        <ResetPasswordForm urlUid={uid} urlToken={token} />
      </div>
      <AppStoreContainer />
    </div>
  );
};

export default ResetPasswordPage;
