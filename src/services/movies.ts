
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const movies = (): Promise<boolean> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'movies/search',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data:{},
               
    }

    return axiosInstance(reqConfig).then((res) => {
        console.log('res',res);
      return res.data;
       
    });
}

export default movies;