import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

const login = (username: string, password: string): Promise<boolean> => {
  //todo: save jwt to localstorage then return true/false
  const reqConfig: AxiosRequestConfig = {
    method: "POST",
    url: "auth",
    data: { username, password },
  };

  return axiosInstance(reqConfig).then((res) => {
    if (res.data) {
      localStorage.setItem("token", res.data);
      return true;
    }
    return false;
  });
};

export default login;
