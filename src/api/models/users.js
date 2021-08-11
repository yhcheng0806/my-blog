import API from "../index";

export const followUser = (id, data) => API.post(`/users/follow/${id}`, data);

export const unfollowUser = (id, data) =>
  API.post(`/users/unfollow/${id}`, data);

export const updateUser = (id, data) => API.post(`/users/update/${id}`, data);

export const deleteUser = (id, data) => API.delete(`/users/delete/${id}`, data);

export const getUser = (symbol) => API.get(`/users/${symbol}`);

export const getUserfanList = (id) => API.get(`/users/followList/${id}`);

export const getUserFollowList = (id) => API.get(`/users/followList/${id}`);
