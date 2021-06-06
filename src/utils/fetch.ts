import { QueryClient } from 'react-query';
import { API_ENDPOINT } from '../constants/env';

export const getJSON = async <DataType>(url: string): Promise<DataType> => {
  const res = await fetch(
    `${API_ENDPOINT}${API_ENDPOINT.endsWith('/') ? '' : '/'}${url}`
  );
  const data = await res.json();

  return res.ok ? data : Promise.reject(data);
};

export const queryClient = new QueryClient();
