import client from '../helpers/client';

const create = (radius, title, topic, lat, lon) => {
  const accessToken = localStorage.getItem('accessToken');
  return client.post(
    'targets/',
    JSON.stringify({ radius, title, topic, lat, lon }),
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
};

export const targetService = {
  create,
};
