
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const movies = (data:any): Promise<boolean> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'movies/search',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data: data,

    }

    return axiosInstance(reqConfig).then((res) => {
        if (res.data) {
            console.log('1',res.data);
        return res.data;
    }
    return false;

    });
}

export default movies;