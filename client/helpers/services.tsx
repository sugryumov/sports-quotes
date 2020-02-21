import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';

export function getQuotes(start: number, limit: number, category?: string): Promise<AxiosResponse> {
  return axios.get(`${BASE_URL}/quotes`, { params: { offset: start, limit, category } });
}

export function getCategories(): Promise<AxiosResponse> {
  return axios.get(`${BASE_URL}/categories`);
}
