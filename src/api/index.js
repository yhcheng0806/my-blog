import axios from "axios";
import { message } from "antd";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo?.token) {
    req.headers.authorization = userInfo.token;
  }

  return req;
});

API.interceptors.response.use(
  (res) => {
    if (res.data.message) {
      message.error(res.data.message);
      return Promise.reject(res.data.message);
    }
    return res;
  },
  (err) => {
    message.error(err.response.data.message || "网络繁忙，稍后请重试");
    return Promise.reject(err);
  }
);

export const login = (formData) => API.post("/user/login", formData);
export const register = (formData) => API.post("/user/register", formData);

export const upload = (data) => API.post("/upload", data);
