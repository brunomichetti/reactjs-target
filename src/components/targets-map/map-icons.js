import Leaflet from 'leaflet';

export const newTargetIcon = new Leaflet.Icon({
  iconUrl: require('../../assets/icons/newTargetMarker.png'),
  iconSize: [45, 53],
  iconAnchor: [22.5, 53],
});
