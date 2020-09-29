import React from 'react';
import { Map, TileLayer, Marker, CircleMarker } from 'react-leaflet';
import { func, string } from 'prop-types';

import 'components/targets-map/TargetsMap/targets-map.scss';
import {
  white,
  safron,
  createTargetOpacity,
} from 'style/common/_constants.scss';
import { mapConstants } from 'constants/mapConstants';
import { newTargetIcon } from 'utils/mapIcons';
import MarketTarget from 'components/targets-map/MarkerTargets/MarkerTargets';
import { latLngShape } from 'constants/shapes';
import { targetsArrayShape } from 'constants/shapes';

const TargetsMap = ({
  newTargetlatlng,
  setNewTargetlatlng,
  newTargetRadius,
  userTargets,
  mapCenter,
}) => {
  const createTarget = (e) => {
    setNewTargetlatlng(e.latlng);
  };

  return (
    <Map
      className="targets-map"
      center={mapCenter}
      zoom={mapConstants.INITIAL_ZOOM}
      onClick={createTarget}
    >
      <TileLayer
        url={mapConstants.TILE_LAYER_URL}
        attribution={mapConstants.TILE_LAYER_ATTRIBUTION}
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
  newTargetlatlng: latLngShape,
  setNewTargetlatlng: func,
  newTargetRadius: string,
  userTargets: targetsArrayShape,
};

export default TargetsMap;
