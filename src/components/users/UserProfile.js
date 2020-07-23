import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { userShape } from '../../constants/shapes';

import menuIcon from '../../assets/icons/menuIcon.png';
import '../../style/App.scss';
import './user-profile.scss';
import { userActions } from '../../actions/user.actions';
import UserImageName from './UserImageName';
import { func } from 'prop-types';

const UserProfile = ({ user, setEditProfile }) => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const loggingOut = useSelector((state) => state.user.loading);

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const handleEditProfile = () => {
    setEditProfile(true);
  };

  return (
    <div className="user-profile">
      <div className="user-profile__options">
        <img src={menuIcon} alt="menu_button" />
      </div>
      <p className="user-profile__app-title">TARGET</p>
      <UserImageName user={user} />
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
        {loggingOut && (
          <Loader type="ThreeDots" color="#2FBCF7" height={80} width={50} />
        )}
      </div>
      <hr className="user-profile__hr" />
      <p className="user-profile__matches">
        {intl.formatMessage({
          id: 'homepage.nomatches.text',
        })}
      </p>
    </div>
  );
};

UserProfile.propTypes = {
  user: userShape,
  setEditProfile: func,
};

export default UserProfile;
