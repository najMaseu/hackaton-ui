import axios from './config';
import { FormValues } from '../components/AddOfferForm/AddOfferForm';

export const getOffers = async () => {
  const response = await axios.get('/all');
  return response.data;
};

export const postOffer = async (formData: FormValues) => axios.post('/add', formData)

export const getImages = async (id: string) => {
  const response = await axios.get(`/images/${id}`);
  return response.data;
};