import { shape, string, number, arrayOf, node, bool, func } from 'prop-types';

export const userShape = shape({
  pk: number.isRequired,
  email: string.isRequired,
  name: string.isRequired,
  gender: string.isRequired,
  one_signal_player_id: string,
});

export const latLngShape = shape({
  lat: number,
  lng: number,
});

export const targetShape = shape({
  id: number.isRequired,
  topic: string.isRequired,
  radius: number.isRequired,
  lat: number.isRequired,
  lng: number.isRequired,
});

export const targetsArrayShape = arrayOf(targetShape);

export const topicSelectShape = shape({
  value: string.isRequired,
  label: string.isRequired,
  icon: node.isRequired,
  hr: bool.isRequired,
});

export const topicSelectArrayShape = arrayOf(topicSelectShape);

export const genderSelectShape = shape({
  value: string.isRequired,
  label: string.isRequired,
});

export const genderSelectArrayShape = arrayOf(genderSelectShape);

export const componentSelectShape = shape({
  Option: func.isRequired,
  SingleValue: func.isRequired,
});

export const matchShape = shape({
  id: number.isRequired,
  name: string.isRequired,
  topic: string.isRequired,
  profile_picture: string,
});

export const userMatchesShape = arrayOf(matchShape);
