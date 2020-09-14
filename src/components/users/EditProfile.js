import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { func, bool } from 'prop-types';

import 'components/users/edit-profile.scss';
import UpperBar from 'components/common/UpperBar';
import UserImageName from 'components/users/UserImageName';
import { userShape } from 'constants/shapes';
import EditProfileForm from 'components/users/EditProfileForm';

const EditProfile = ({ user, editProfile, setEditProfile }) => {
  const intl = useIntl();

  const [newImg, setNewImg] = useState(null);

  const handleGoBack = () => {
    setEditProfile(false);
    setNewImg(null);
  };
  return (
    <div className="edit-profile">
      <UpperBar
        goBackFunction={handleGoBack}
        titleText={intl.formatMessage({ id: 'editprofile.title.text' })}
      />
      <div className="edit-profile__user-image-name">
        <UserImageName
          user={user}
          editProfile={editProfile}
          newImg={newImg}
          setNewImg={setNewImg}
        />
      </div>
      <EditProfileForm
        user={user}
        setEditProfile={setEditProfile}
        newImg={newImg}
      />
    </div>
  );
};

EditProfile.propTypes = {
  user: userShape,
  editProfile: bool,
  setEditProfile: func,
};

export default EditProfile;
