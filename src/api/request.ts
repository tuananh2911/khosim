import { BASE_API } from "@/constants/api";
import axios from "axios";

const request = axios.create({
  baseURL: BASE_API,
});

request.interceptors.request.use(
  async (request) => {
    // if (getToken()) {
    //   request.headers.Authorization = "Bearer " + getToken();
    // }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // removeToken();
    }
    return Promise.reject(error);
  }
);

export default request;
