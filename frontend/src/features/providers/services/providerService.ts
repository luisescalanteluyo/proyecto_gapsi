import axiosClient from '../../../app/api/axiosClient';

export const getProviders = async (page = 0, size = 5) => {
  const response = await axiosClient.get(`/providers?page=${page}&size=${size}`);
  return response.data;
};

export const addProvider = async (provider: any) => {
  return axiosClient.post('/providers', provider);
};

export const deleteProvider = async (id: number) => {
  return axiosClient.delete(`/providers/${id}`);
};