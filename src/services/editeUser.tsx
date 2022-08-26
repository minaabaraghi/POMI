import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

const editeUser = (
  id: any,
  firstName: string,
  lastName: string,
  username: string
): Promise<any[]> => {
  const reqConfig: AxiosRequestConfig = {
    method: "PUT",
    url: `users/${id}`,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: { firstName, lastName, username },
  };

  return axiosInstance(reqConfig).then((res) => {
    return res.data;
  });
};

export default editeUser;
