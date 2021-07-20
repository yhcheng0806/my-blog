import axios from "axios";
import { message } from "antd";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo?.token) {
    req.headers.authorization = userInfo.token;
  }

  return req;
});

API.interceptors.response.use((res) => {
  if (res.data.message) {
    message.error(res.data.message, 3);
  }
  return res;
});

export const login = (formData) => API.post("/user/login", formData);
export const register = (formData) => API.post("/user/register", formData);
