import React from 'react';
import { object } from 'prop-types';
import { useIntl } from 'react-intl';

import 'style/App.scss';
import MatchItem from 'components/common/MatchItem';

const UserMatches = ({ userMatches }) => {
  const intl = useIntl();

  return (
    <div className="user_profile__matches">
      {userMatches && userMatches.length > 0 ? (
        <div>
          <p className="user-profile__matches-empty">Chat</p>
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
      ) : (
        <p className="user-profile__matches-empty">
          {intl.formatMessage({
            id: 'homepage.nomatches.text',
          })}
        </p>
      )}
    </div>
  );
};

UserMatches.propTypes = {
  userMatches: object,
};

export default UserMatches;
