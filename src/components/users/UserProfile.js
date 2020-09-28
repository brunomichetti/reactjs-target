import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { func, bool } from 'prop-types';

import 'style/App.scss';
import 'components/users/user-profile.scss';
import menuIcon from 'assets/icons/menuIcon.png';
import { userActions } from 'actions/user.actions';
import UserImageName from 'components/users/UserImageName';
import CustomLoader from 'components/common/CustomLoader';
import { userShape } from 'constants/shapes';
import UserMatches from 'components/users/UserMatches';
import useMatches from 'hooks/useMatches';

const UserProfile = ({ user, editProfile, setEditProfile }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const handleEditProfile = () => {
    setEditProfile(true);
  };

  const { userMatches, loggingOut } = useMatches();

  return (
    <div className="user-profile">
      <div className="user-profile__options">
        <img src={menuIcon} alt="menu_button" />
      </div>
      <p className="user-profile__app-title">TARGET</p>
      <UserImageName user={user} editProfile={editProfile} />
      <div className="user-profile__button-link">
        <button
          type="button"
          className="logout__btn-text"
          onClick={handleEditProfile}
        >
          {intl.formatMessage({
            id: 'homepage.edit.text',
          })}
        </button>{' '}
        &nbsp; / &nbsp;
        <button
          type="button"
          className="logout__btn-text"
          onClick={handleLogout}
        >
          {intl.formatMessage({
            id: 'homepage.logout.text',
          })}
        </button>
        {loggingOut && <CustomLoader />}
      </div>
      <hr className="user-profile__hr" />
      <UserMatches userMatches={userMatches} />
    </div>
  );
};

UserProfile.propTypes = {
  user: userShape,
  editProfile: bool,
  setEditProfile: func,
};

export default UserProfile;
