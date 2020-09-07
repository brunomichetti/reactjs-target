import React, { useState } from 'react';

import 'style/App.scss';
import UserProfile from 'components/users/UserProfile';
import CreateTarget from 'components/targets/CreateTarget';
import TargetsMap from 'components/targets-map/TargetsMap';
import smilies from 'assets/smilies.png';
import EditProfile from 'components/users/EditProfile';

const HomePage = () => {
  const { user } = JSON.parse(localStorage.getItem('user'));
  const [newTargetlatlng, setNewTargetlatlng] = useState(null);
  const [newTargetRadius, setNewTargetRadius] = useState('');
  const [editProfile, setEditProfile] = useState(false);
  return (
    <div className="main-div">
      <div className="main-div-left-homepage">
        {editProfile && (
          <EditProfile
            user={user}
            editProfile={editProfile}
            setEditProfile={setEditProfile}
          />
        )}
        {!newTargetlatlng && !editProfile && (
          <UserProfile
            user={user}
            editProfile={editProfile}
            setEditProfile={setEditProfile}
          />
        )}
        {newTargetlatlng && !editProfile && (
          <CreateTarget
            newTargetlatlng={newTargetlatlng}
            setNewTargetlatlng={setNewTargetlatlng}
            newTargetRadius={newTargetRadius}
            setNewTargetRadius={setNewTargetRadius}
          />
        )}
        <div className="user-profile__smilies">
          <img src={smilies} alt="smilies" className="smilies-img" />
        </div>
      </div>
      <TargetsMap
        newTargetlatlng={newTargetlatlng}
        setNewTargetlatlng={setNewTargetlatlng}
        newTargetRadius={newTargetRadius}
      />
    </div>
  );
};
export default HomePage;
