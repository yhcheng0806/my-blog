import API from "../index";

export const createPost = (data) => API.post("/posts/create", data);

export const followPost = (data) => API.post("/posts/follow", data);

export const updatePost = (id, data) => API.put(`/posts/update/${id}`, data);

export const deletePost = (id) => API.delete(`/posts/delete/${id}`);

export const likePost = (id, data) => API.put(`/posts/like/${id}`, data);

export const getPost = (id) => API.get(`/posts/${id}`);

export const getAllPost = () => API.get(`/posts`);
