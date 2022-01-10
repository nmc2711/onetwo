import axios, { AxiosRequestConfig } from 'axios';

import { baseApiUrl } from '../../enum/config';

const config: AxiosRequestConfig = {
  baseURL: baseApiUrl,
  headers: {
    "Content-type": "application/json",
  },
};
export const axiosInstance = axios.create(config);