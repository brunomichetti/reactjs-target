import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import { func, bool } from 'prop-types';

import 'style/App.scss';
import 'components/users/user-profile.scss';

import UserImageName from 'components/users/UserImageName';
import CustomLoader from 'components/common/CustomLoader';
import { userShape, targetsArrayShape } from 'constants/shapes';
import UserMatches from 'components/users/UserMatches';
import useMatches from 'hooks/useMatches';
import TargetsList from 'components/targets/TargetsList';
import CustomHamburgerMenu from 'components/common/CustomHamburgerMenu';

const UserProfile = ({
  user,
  editProfile,
  setEditProfile,
  userTargets,
  setMapCenter,
}) => {
  const intl = useIntl();

  const [seeMatches, setSeeMatches] = useState(true);

  const { userMatches, loggingOut, requestError, errorMsg } = useMatches();

  return (
    <div className="user-profile">
      <div className="user-profile__options">
        <CustomHamburgerMenu isLoggedIn={true} />
      </div>
      <p className="user-profile__app-title">TARGET</p>
      <UserImageName user={user} editProfile={editProfile} />
      <div className="user-profile__button-link">
        <button
          type="button"
          className="button-as-link"
          onClick={() => setEditProfile(true)}
        >
          {intl.formatMessage({
            id: 'homepage.edit.text',
          })}
        </button>{' '}
        &nbsp; / &nbsp;
        <button
          type="button"
          className="button-as-link"
          onClick={() => setSeeMatches(true)}
        >
          {intl.formatMessage({
            id: 'matches.list.text',
          })}
        </button>{' '}
        &nbsp; / &nbsp;
        <button
          type="button"
          className="button-as-link"
          onClick={() => setSeeMatches(false)}
        >
          {intl.formatMessage({
            id: 'homepage.my.targets.text',
          })}
        </button>
        {loggingOut && <CustomLoader />}
      </div>
      <hr className="user-profile__hr" />
      {requestError ? (
        <div className="user-form__alert user-profile-error"> {errorMsg} </div>
      ) : seeMatches ? (
        <UserMatches userMatches={userMatches} />
      ) : (
        <TargetsList userTargets={userTargets} setMapCenter={setMapCenter} />
      )}
    </div>
  );
};

UserProfile.propTypes = {
  user: userShape,
  editProfile: bool,
  setEditProfile: func,
  userTargets: targetsArrayShape,
  setMapCenter: func,
};

export default UserProfile;
