import React from 'react';
import { useIntl } from 'react-intl';
import { func } from 'prop-types';

import UpperBar from '../common/UpperBar';
import UserImageName from './UserImageName';
import { userShape } from '../../constants/shapes';
import './edit-profile.scss';
import EditProfileForm from './EditProfileForm';

const EditProfile = ({ user, setEditProfile }) => {
  const intl = useIntl();

  const handleGoBack = () => {
    setEditProfile(false);
  };
  return (
    <div className="edit-profile">
      <UpperBar
        goBackFunction={handleGoBack}
        titleText={intl.formatMessage({ id: 'editprofile.title.text' })}
      />

      <div className="edit-profile__user-image-name">
        <UserImageName user={user} />
      </div>

      <EditProfileForm user={user} setEditProfile={setEditProfile} />
    </div>
  );
};

EditProfile.propTypes = {
  user: userShape,
  setEditProfile: func,
};

export default EditProfile;
