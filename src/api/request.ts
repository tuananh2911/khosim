import { BASE_API } from "@/constants/api";
import axios from "axios";

const request = axios.create({
  baseURL: BASE_API,
});

request.interceptors.request.use(
  async (request) => {
      const token = localStorage.getItem("token")
    if (token) {
      request.headers.Authorization = "Bearer " + token;
    }
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
    if (error?.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login"
    }
    return Promise.reject(error);
  }
);

export default request;
