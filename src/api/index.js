import axios from "axios";
import { message } from "antd";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  if (authData?.token) {
    req.headers.authorization = authData.token;
  }

  return req;
});

API.interceptors.response.use((res) => {
  if (res.data.message) {
    message.error(res.data.message, 3);
  }
  return res;
});

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts/add", newPost);
export const updatePost = (id, post) => API.post("/posts/update/" + id, post);
export const deletePost = (id) => API.post("/posts/delete/" + id);
export const likePost = (id) => API.post("/posts/like/" + id);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
