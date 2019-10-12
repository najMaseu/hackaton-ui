import axios from './config';

export const getOffers = async () => {
  const response = await axios.get('all');
  return response.data;
};
