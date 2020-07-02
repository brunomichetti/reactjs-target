import React, { useState } from 'react';

import '../style/App.scss';
import UserProfile from '../components/users/UserProfile';
import CreateTarget from '../components/targets/CreateTarget';
import TargetsMap from '../components/targets-map/TargetsMap';
import smilies from '../assets/smilies.png';

const HomePage = () => {
  const [newTargetlatlng, setNewTargetlatlng] = useState(null);
  return (
    <div className="main-div">
      <div className="main-div-left-homepage">
        {!newTargetlatlng && <UserProfile />}
        {newTargetlatlng && (
          <CreateTarget
            newTargetlatlng={newTargetlatlng}
            setNewTargetlatlng={setNewTargetlatlng}
          />
        )}
        <div className="user-profile__smilies">
          <img src={smilies} alt="smilies" className="smilies-img" />
        </div>
      </div>
      <TargetsMap
        newTargetlatlng={newTargetlatlng}
        setNewTargetlatlng={setNewTargetlatlng}
      />
    </div>
  );
};
export default HomePage;
