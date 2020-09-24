import React from 'react';
import { func, string, number } from 'prop-types';

import { getIconFileByTopic } from 'components/targets/topicsList';
import 'components/common/target-list-item.scss';

const TargetListItem = ({ title, topic, lat, lon, setMapCenter }) => {
  return (
    <div
      className="target-item"
      onClick={() => {
        setMapCenter({
          lat: lat,
          lng: lon,
        });
      }}
    >
      <div className="target-item__text-container">
        <p className="target-item__title">{title}</p>
      </div>
      <div className="target-item__topic-icon-container">
        <img
          className="target-item__topic-icon"
          src={getIconFileByTopic(topic)}
          alt="icon"
        />
      </div>
    </div>
  );
};

TargetListItem.propTypes = {
  title: string.isRequired,
  topic: string.isRequired,
  lat: number.isRequired,
  lon: number.isRequired,
  setMapCenter: func,
};

export default TargetListItem;
