import React from 'react';
import { CircleMarker, Marker } from 'react-leaflet';

import { safron, createTargetOpacity } from 'style/common/_constants.scss';
import { targetsArrayShape } from 'constants/shapes';
import { getLeafletIconByTopic } from 'utils/mapIcons';

const MarkerTarget = ({ targets }) => (
  <div>
    {targets.map(({ id, topic, radius, lat, lon }) => (
      <div key={id}>
        <Marker
          position={{ lat: lat, lng: lon }}
          icon={getLeafletIconByTopic(topic)}
        />
        <CircleMarker
          center={{ lat: lat, lng: lon }}
          radius={radius}
          stroke={false}
          fillColor={safron}
          fillOpacity={createTargetOpacity}
        />
      </div>
    ))}
  </div>
);

MarkerTarget.propTypes = {
  targets: targetsArrayShape,
};

export default MarkerTarget;
