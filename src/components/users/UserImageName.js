import React from 'react';

import defaultProfileImg from '../../assets/profilePicture.png';
import './user-profile.scss';
import { userShape } from '../../constants/shapes';

const UserImageName = ({ user: { name, profile_picture } }) => (
  <div className="user-profile__profile-picture">
    <div className="user-profile__rounded-image">
      <img src={profile_picture || defaultProfileImg} width="250" alt="user" />
    </div>
    <p className="user-profile__username">{name}</p>
  </div>
);

UserImageName.propTypes = {
  user: userShape,
};

export default UserImageName;
