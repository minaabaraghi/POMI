import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axiosInstance';
import axios from 'axios';
const movies = (
  search: string,
  year: number,
  type: string
): Promise<boolean> => {
  const body = {
    search,
    type
  };
  if (year) body['year'] = year;

  const reqConfig: AxiosRequestConfig = {
    method: 'POST',
    url: 'movies/search',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    },
    data: body
  };

  return axiosInstance(reqConfig).then((res) => {
    if (res.data) {
      console.log('1', res.data);
      return res.data;
    }
    return false;
  });
};

export default movies;
