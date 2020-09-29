import React from 'react';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import 'components/users/UserProfile/user-profile.scss';
import MatchItem from 'components/common/MatchItem/MatchItem';
import { userMatchesShape } from 'constants/shapes';

const UserMatches = ({ userMatches = [] }) => {
  const intl = useIntl();

  return (
    <div className="user-profile__list-container">
      {userMatches.length ? (
        <div>
          <p className="user-profile__list-text">
            {intl.formatMessage({
              id: 'matches.list.text',
            })}
          </p>
          <div className="user-profile__list-display">
            {userMatches.map(({ id, name, topic, profile_picture }) => (
              <div key={id} className="user-profile-list-element">
                <hr className="user-profile__list-hr" />
                <MatchItem
                  name={name}
                  topic={topic}
                  profilePicture={profile_picture}
                />
              </div>
            ))}
            <hr className="user-profile__list-hr" />
          </div>
        </div>
      ) : (
        <p className="user-profile__list-text">
          {intl.formatMessage({
            id: 'homepage.nomatches.text',
          })}
        </p>
      )}
    </div>
  );
};

UserMatches.propTypes = {
  userMatches: userMatchesShape,
};

export default UserMatches;
