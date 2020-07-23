import React from 'react';
import ExampleComponent from 'react-rounded-image';

import defaultProfileImg from '../../assets/profilePicture.png';
import './user-profile.scss';
import { userShape } from '../../constants/shapes';

const UserImageName = ({ user }) => {
  return (
    <div className="user-profile__profile-picture">
      <div>
        <ExampleComponent
          image={defaultProfileImg}
          roundedSize="0"
          imageWidth="150"
          imageHeight="150"
        />
      </div>
      <p className="user-profile__username">{user.name}</p>
    </div>
  );
};

UserImageName.propTypes = {
  user: userShape,
};

export default UserImageName;
