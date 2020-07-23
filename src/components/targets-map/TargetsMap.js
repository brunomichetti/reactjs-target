import React from 'react';
import { Map, TileLayer, Marker, CircleMarker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { mapConstants } from '../../constants/map.constants';
import { newTargetIcon } from './map-icons';
import {
  white,
  safron,
  createTargetOpacity,
} from '../../style/common/_constants.scss';
import MarketTarget from './MarkerTargets';

const TargetsMap = ({
  newTargetlatlng,
  setNewTargetlatlng,
  newTargetRadius,
}) => {
  const createTarget = (e) => {
    setNewTargetlatlng(e.latlng);
  };

  const { userTargets } = useSelector((state) => state.target);

  return (
    <Map
      center={{
        lat: mapConstants.INTIAL_LAT,
        lng: mapConstants.INITIAL_LONG,
      }}
      zoom={mapConstants.INITIAL_ZOOM}
      style={{ width: '70vw', height: '100vh' }}
      onClick={createTarget}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {newTargetlatlng && (
        <div>
          <Marker position={newTargetlatlng} icon={newTargetIcon} />
          <CircleMarker
            center={newTargetlatlng}
            radius={newTargetRadius}
            color={safron}
            fillColor={white}
            fillOpacity={createTargetOpacity}
          />
        </div>
      )}
      <MarketTarget targets={userTargets} />
    </Map>
  );
};

TargetsMap.propTypes = {
  newTargetlatlng: PropTypes.object,
  setNewTargetlatlng: PropTypes.func,
  newTargetRadius: PropTypes.object,
};

export default TargetsMap;
