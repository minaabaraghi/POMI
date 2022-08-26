
import { AxiosRequestConfig } from "axios"
import axiosInstance from "./axiosInstance"
import axios from 'axios';
const register = (firstName:string,lastName:string,username:string,password:string): Promise<boolean> => {
    const reqConfig: AxiosRequestConfig = {
        method: 'POST',
        url: 'users',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        data:{firstName,lastName,username,password},
               
    }

    return axiosInstance(reqConfig).then((res) => {
      return res.data;
       
    });
}

export default register;