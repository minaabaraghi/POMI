
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const movies = (data): Promise<boolean> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'movies/search',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data: data,

    }

    return axiosInstance(reqConfig).then((res) => {
        return res.data;

    });
}

export default movies;