import React from 'react';

import 'components/users/user-profile.scss';
import defaultProfileImg from 'assets/profilePicture.png';
import { userShape } from 'constants/shapes';
import { bool, func } from 'prop-types';
import UserImageEdit from 'components/users/UserImageEdit';

const UserImageName = ({
  user: { name, profile_picture },
  editProfile,
  setNewImg,
}) => {
  return (
    <div className="user-profile__profile-picture">
      {editProfile ? (
        <UserImageEdit profilePicture={profile_picture} setNewImg={setNewImg} />
      ) : (
        <div className="user-profile__rounded-image">
          <img
            src={profile_picture || defaultProfileImg}
            width="250"
            alt="user"
          />
        </div>
      )}
      <p className="user-profile__username">{name}</p>
    </div>
  );
};

UserImageName.propTypes = {
  user: userShape,
  editProfile: bool,
  setNewImg: func,
};

export default UserImageName;
