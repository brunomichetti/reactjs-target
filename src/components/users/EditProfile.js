import React from 'react';
import { useIntl } from 'react-intl';
import { func } from 'prop-types';

import UpperBar from '../common/UpperBar';

const EditProfile = ({ setEditProfile }) => {
  const intl = useIntl();
  const handleGoBack = () => {
    setEditProfile(false);
  };
  return (
    <div className="create-target">
      <UpperBar
        goBackFunction={handleGoBack}
        titleText={intl.formatMessage({ id: 'editprofile.title.text' })}
      />
      <p className="create-target__new-target-text">
        {intl.formatMessage({
          id: 'createtarget.new.target.text',
        })}
      </p>
    </div>
  );
};

EditProfile.propTypes = {
  setEditProfile: func,
};

export default EditProfile;
