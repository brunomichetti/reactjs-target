import React from 'react';
import { func, string, number } from 'prop-types';
import { useDispatch } from 'react-redux';

import { getIconFileByTopic } from 'components/targets/topicsList';
import 'components/common/target-list-item.scss';
import trashButton from 'assets/trashButton.png';
import { targetActions } from 'actions/target.actions';

const TargetListItem = ({ id, title, topic, lat, lon, setMapCenter }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="target-item"
      onClick={() =>
        setMapCenter({
          lat: lat,
          lng: lon,
        })
      }
    >
      <div className="target-item__trash-button-container">
        <button
          className="target-item__trash-button"
          onClick={() => {
            dispatch(targetActions.deleteTarget(id));
          }}
        >
          <img
            className="target-item__trash-button-img"
            src={trashButton}
            alt="Trash button"
          />
        </button>
      </div>
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
  id: number.isRequired,
  title: string.isRequired,
  topic: string.isRequired,
  lat: number.isRequired,
  lon: number.isRequired,
  setMapCenter: func,
};

export default TargetListItem;
