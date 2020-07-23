import React from 'react';
import { CircleMarker, Marker } from 'react-leaflet';

import { targetsArrayShape } from '../../constants/shapes';

import {
  safron,
  createTargetOpacity,
} from '../../style/common/_constants.scss';
import { getIconByTopic } from './map-icons';

const MarkerTarget = ({ targets }) => (
  <div>
    {targets.map(({ id, topic, radius, lat, lon }) => (
      <div key={id}>
        <Marker
          position={{ lat: lat, lng: lon }}
          icon={getIconByTopic(topic)}
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
