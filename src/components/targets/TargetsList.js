import React from 'react';
import { useIntl } from 'react-intl';
import { func } from 'prop-types';

import { targetsArrayShape } from 'constants/shapes';
import TargetListItem from 'components/common/TargetListItem';
import 'components/users/user-profile.scss';

const TargetsList = ({ userTargets = [], setMapCenter }) => {
  const intl = useIntl();
  return (
    <div className="user-profile__list-container">
      {userTargets.length ? (
        <div>
          <p className="user-profile__list-text">
            {intl.formatMessage({
              id: 'targets.list.text',
            })}
          </p>
          <div className="user-profile__list-display">
            {userTargets.map(({ id, title, topic, lat, lon }) => (
              <div id={id}>
                <hr className="user-profile__list-hr" />
                <TargetListItem
                  id={id}
                  title={title}
                  topic={topic}
                  lat={lat}
                  lon={lon}
                  setMapCenter={setMapCenter}
                />
              </div>
            ))}
            <hr className="user-profile__list-hr" />
          </div>
        </div>
      ) : (
        <div>
          {intl.formatMessage({
            id: 'targets.list.empty.text',
          })}
        </div>
      )}
    </div>
  );
};

TargetsList.propTypes = {
  userTargets: targetsArrayShape,
  setMapCenter: func,
};

export default TargetsList;
