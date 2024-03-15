import axios, { AxiosResponse } from "axios";
import { Customer } from '../interface/customer.interface';

const api = axios.create({
  baseURL: "https://localhost4000/customer",
});

export const requestData = async (endpoint: string): Promise<Customer[]> => {
  const { data }: AxiosResponse<Customer[]> = await api.get(endpoint);
  return data;
};

export const requestUpdate = async (endpoint: string, body: Customer): Promise<Customer> => {
  const { data }: AxiosResponse<Customer> = await api.post(endpoint, body);
  return data;
};

export const requestRegister = async (endpoint: string, body: Customer): Promise<Customer> => {
  const { data }: AxiosResponse<Customer> = await api.post(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint: string): Promise<Customer> => {
  const { data }: AxiosResponse<Customer> = await api.delete(endpoint);
  return data;
};

export default api;
