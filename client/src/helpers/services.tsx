import axios from 'axios';
import { BASE_URL } from '../constants';
import { getDataToLocalStorage } from './index';

function commonRequest(path: any, method: any, data?: any, params?: any) {
  return axios({
    baseURL: `${BASE_URL}/${path}`,
    method,
    data,
    params,
    headers: {
      authorization: getDataToLocalStorage('tokenSportsQuotes'),
    },
  });
}

export function getQuotes(start?: number, limit?: number, category?: string) {
  return commonRequest('quotes', 'GET', { params: { offset: start, limit, category } });
}

// export function getQuoteId(id: number): Promise<AxiosResponse> {
//   return axios.get(`${BASE_URL}/quotes/{${id}}`);
// }

export function getCategories() {
  return commonRequest('categories', 'GET');
}

export function createCategory(name: any) {
  return commonRequest('create-category', 'POST', { name });
}

export function deleteCategory(categoryId: any) {
  return commonRequest(`categories/${categoryId}`, 'DELETE');
}
export function updateCategory(categoryId: any, name: any) {
  return commonRequest(`categories/${categoryId}`, 'PUT', { name });
}

export function authAdmin(email: string, password: string) {
  return commonRequest('auth/login', 'POST', { email, password });
}
