
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const movies = (search:string): Promise<boolean> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'users',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data:{search},
               
    }

    return axiosInstance(reqConfig).then((res) => {
      return res.data;
       
    });
}

export default movies;