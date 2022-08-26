import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

const getUser = (id: any): Promise<any> => {
  const reqConfig: AxiosRequestConfig = {
    method: "GEt",
    url: `users/${id}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  return axiosInstance(reqConfig).then((res) => {
    return res.data;
  });
};

export default getUser;