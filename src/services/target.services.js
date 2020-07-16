import client from '../helpers/client';

const create = (radius, title, topic, lat, lon) =>
  client.post('targets/', JSON.stringify({ radius, title, topic, lat, lon }));

export const targetService = {
  create,
};
