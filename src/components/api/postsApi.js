import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800/api/posts",
});

export const getPosts = () => api.get("/:id", getPost);
export const getPost = () => api.get("/", getPosts);
