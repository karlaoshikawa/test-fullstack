import axios, { AxiosResponse } from "axios";
import { CreateCustomer, Customer } from '../interface/customer.interface';

const api = axios.create({
  baseURL: "http://localhost:4000",
});


export const requestData = async (endpoint: string): Promise<Customer[]> => {
  const { data }: AxiosResponse<Customer[]> = await api.get(endpoint);
  return data;
};

export const requestOne = async (endpoint: string): Promise<Customer> => {
  const { data }: AxiosResponse<Customer> = await api.get(endpoint);
  return data;
};

export const requestUpdate = async (endpoint: string, body: Customer): Promise<Customer> => {
  const { data }: AxiosResponse<Customer> = await api.patch(endpoint, body);
  return data;
};

export const requestRegister = async (endpoint: string, body: CreateCustomer): Promise<Customer> => {
  const { data }: AxiosResponse<Customer> = await api.post(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint: string): Promise<Customer> => {
  const { data }: AxiosResponse<Customer> = await api.delete(endpoint);
  return data;
};

export default api;
