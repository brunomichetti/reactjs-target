import React from 'react';
import { CircleMarker, Marker } from 'react-leaflet';

import {
  safron,
  createTargetOpacity,
} from '../../style/common/_constants.scss';
import { getIconByTopic } from './map-icons';

const MarkerTarget = ({ targets }) => (
  <div>
    {targets.map(({ _, topic, radius, lat, lon }) => (
      <div>
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
export default MarkerTarget;
