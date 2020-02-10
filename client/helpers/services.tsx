import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';

export function getQuotes(): Promise<AxiosResponse> {
  return axios.get(`${BASE_URL}/quotes`);
}
