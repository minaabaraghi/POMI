import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

const deleteUser = (id: any): Promise<any[]> => {
  console.log(id, "id del");

  const reqConfig: AxiosRequestConfig = {
    method: "DELETE",
    url: `users/${id}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  return axiosInstance(reqConfig).then((res) => {
    return res.data;
  });
};

export default deleteUser;
