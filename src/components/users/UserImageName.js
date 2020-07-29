import React from 'react';

import defaultProfileImg from '../../assets/profilePicture.png';
import './user-profile.scss';
import { userShape } from '../../constants/shapes';

const UserImageName = ({ user }) => {
  let showImage = defaultProfileImg;
  if (user.profile_picture) {
    showImage = user.profile_picture;
  }

  return (
    <div className="user-profile__profile-picture">
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={showImage} width="250" alt="user" />
      </div>
      <p className="user-profile__username">{user.name}</p>
    </div>
  );
};

UserImageName.propTypes = {
  user: userShape,
};

export default UserImageName;
