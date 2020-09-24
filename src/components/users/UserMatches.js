import React from 'react';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import MatchItem from 'components/common/MatchItem';
import { userMatchesShape } from 'constants/shapes';
import 'components/users/user-profile.scss';

const UserMatches = ({ userMatches = [] }) => {
  const intl = useIntl();

  return (
    <div className="user-profile__list-container">
      {userMatches.length > 0 ? (
        <div>
          <p className="user-profile__list-text">
            {intl.formatMessage({
              id: 'matches.list.text',
            })}
          </p>
          <div className="user-profile__list-display">
            {userMatches.map(({ id, name, topic, profile_picture }) => (
              <div key={id}>
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
