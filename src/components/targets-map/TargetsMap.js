import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

import { mapConstants } from '../../constants/map.constants';
import { newTargetIcon } from './map-icons';

const TargetsMap = ({ newTargetlatlng, setNewTargetlatlng }) => {
  const createTarget = (e) => {
    setNewTargetlatlng(e.latlng);
  };

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
        <Marker position={newTargetlatlng} icon={newTargetIcon} />
      )}
    </Map>
  );
};

export default TargetsMap;
