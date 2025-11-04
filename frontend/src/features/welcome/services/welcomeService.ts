import axiosClient from '../../../app/api/axiosClient';

export const getWelcomeData = async () => {
  const response = await axiosClient.get('/welcome');
  return response.data;
};