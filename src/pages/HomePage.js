import React, { useState } from 'react';

import 'style/App.scss';
import UserProfile from 'components/users/UserProfile';
import CreateTarget from 'components/targets/CreateTarget';
import TargetsMap from 'components/targets-map/TargetsMap';
import smilies from 'assets/smilies.png';
import EditProfile from 'components/users/EditProfile';
import useTargetsMap from 'hooks/useTargetsMap';
import { mapConstants } from 'constants/map.constants';

const HomePage = () => {
  const { user } = JSON.parse(localStorage.getItem('user'));

  const [newTargetlatlng, setNewTargetlatlng] = useState(null);

  const [newTargetRadius, setNewTargetRadius] = useState('');

  const [editProfile, setEditProfile] = useState(false);

  const [mapCenter, setMapCenter] = useState({
    lat: mapConstants.INTIAL_LAT,
    lng: mapConstants.INITIAL_LONG,
  });

  const { userTargets } = useTargetsMap();

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
            userTargets={userTargets}
            setMapCenter={setMapCenter}
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
        userTargets={userTargets}
        mapCenter={mapCenter}
      />
    </div>
  );
};
export default HomePage;
