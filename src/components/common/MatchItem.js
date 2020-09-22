import React from 'react';
import { string } from 'prop-types';

import defaultProfileImg from 'assets/profilePicture.png';
import 'components/common/match-item.scss';
import { getIconFileByTopic } from 'components/targets/topicsList';

const MatchItem = ({ name, topic, profilePicture }) => (
  <div className="match-item">
    <div className="match-item__image-container">
      <img
        className="match-item__image"
        src={profilePicture || defaultProfileImg}
        alt="user"
      />
    </div>
    <div className="match-item__text-container">
      <p className="match-item__name">{name}</p>
    </div>
    <div className="match-item__topic-icon-container">
      <img
        className="match-item__topic-icon"
        src={getIconFileByTopic(topic)}
        alt="icon"
      />
    </div>
  </div>
);

MatchItem.propTypes = {
  name: string.isRequired,
  topic: string.isRequired,
  profilePicture: string,
};

export default MatchItem;
