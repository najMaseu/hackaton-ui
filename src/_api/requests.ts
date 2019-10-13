import axios from './config';
import { FormValues } from '../components/AddOfferForm/AddOfferForm';

export const getOffers = async () => {
  const response = await axios.get('/all');
  return response.data;
};

export const postOffer = async (formData: FormValues) => axios.post('/offers', formData)

export const getImages = async (id: string) => {
  const response = await axios.get(`/images/${id}`);
  return response.data;
};

export const postImage = (file: any, id: string) => {
  const url = `/images/${id}`;
  const formData = new FormData();
  formData.append('file',file)
  return  axios.post(url, formData, {
    headers: {
        'content-type': 'multipart/form-data'
    }
})
}