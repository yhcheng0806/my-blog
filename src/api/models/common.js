import API from "../index";

export const upload = (data) => API.post("/upload", data);
