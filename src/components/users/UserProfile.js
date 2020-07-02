import React from 'react';
import ExampleComponent from 'react-rounded-image';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

import menuIcon from '../../assets/icons/menuIcon.png';
import '../../style/App.scss';
import './user-profile.scss';
import defaultProfileImg from '../../assets/profilePicture.png';
import { userActions } from '../../actions/user.actions';
import { homePageLink } from '../../constants/link.constants';

const UserProfile = () => {
  const intl = useIntl();

  const dispatch = useDispatch();

  const { user } = JSON.parse(localStorage.getItem('user'));

  const loggingOut = useSelector((state) => state.authentication.loggingOut);

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className="user-profile">
      <div className="user-profile__options">
        <img src={menuIcon} alt="menu_button" />
      </div>
      <p className="user-profile__app-title">TARGET</p>
      <div className="user-profile__profile-picture">
        <ExampleComponent
          image={defaultProfileImg}
          roundedSize="0"
          imageWidth="150"
          imageHeight="150"
        />
      </div>
      <p className="user-profile__username">{user.email}</p>
      <div className="user-profile__edit-logout">
        <a href={homePageLink}>
          {intl.formatMessage({
            id: 'homepage.edit.text',
          })}
        </a>{' '}
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

export default UserProfile;
