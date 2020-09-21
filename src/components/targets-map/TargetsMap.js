import React, { useEffect } from 'react';
import { Map, TileLayer, Marker, CircleMarker } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { func, string } from 'prop-types';
import { useDispatch } from 'react-redux';

import 'components/targets-map/targets-map.scss';
import {
  white,
  safron,
  createTargetOpacity,
} from 'style/common/_constants.scss';
import { mapConstants } from 'constants/map.constants';
import { newTargetIcon } from 'components/targets-map/map-icons';
import MarketTarget from 'components/targets-map/MarkerTargets';
import { latLngShape } from 'constants/shapes';
import { userActions } from 'actions/user.actions';

const TargetsMap = ({
  newTargetlatlng,
  setNewTargetlatlng,
  newTargetRadius,
}) => {
  const { getTargets } = userActions;

  const dispatch = useDispatch();

  const createTarget = (e) => {
    setNewTargetlatlng(e.latlng);
  };
  const { userTargets } = useSelector((state) => state.target);

  useEffect(() => {
    dispatch(getTargets());
  }, [dispatch, getTargets]);

  return (
    <Map
      className="targets-map"
      center={{
        lat: mapConstants.INTIAL_LAT,
        lng: mapConstants.INITIAL_LONG,
      }}
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
};

export default TargetsMap;
