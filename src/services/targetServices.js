import client from 'helpers/client';

const create = (radius, title, topic, lat, lon) =>
  client.post('targets/', JSON.stringify({ radius, title, topic, lat, lon }));

const getTargets = () => client.get('targets/');

const getMatches = () => client.get('users/matches/');

const deleteTarget = (id) => client.delete(`targets/${id}`);

export const targetService = {
  create,
  getTargets,
  getMatches,
  deleteTarget,
};
