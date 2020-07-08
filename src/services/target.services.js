import client from '../helpers/client';

const create = (radius, title, topic, lat, lon) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return client.post(
    'targets/',
    JSON.stringify({ radius, title, topic, lat, lon }),
    { headers: { Authorization: `Bearer ${user.access_token}` } }
  );
};

export const targetService = {
  create,
};
