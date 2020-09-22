import React from 'react';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import MatchItem from 'components/common/MatchItem';
import { userMatchesShape } from 'constants/shapes';

const UserMatches = ({ userMatches = [] }) => {
  const intl = useIntl();

  return (
    <div className="user_profile__matches">
      {userMatches.length > 0 ? (
        <div>
          <p className="user-profile__matches-text">Chat</p>
          <div className="user-profile__matches-list">
            {userMatches.map(({ id, name, topic, profile_picture }) => (
              <div key={id}>
                <hr className="user-profile__matches-hr" />
                <MatchItem
                  name={name}
                  topic={topic}
                  profilePicture={profile_picture}
                />
              </div>
            ))}
            <hr className="user-profile__matches-hr" />
          </div>
        </div>
      ) : (
        <p className="user-profile__matches-text">
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
