import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8800/api/static",
});
export const getJobs = () => api.get("/jobs");
export const getJobTypes = () => api.get("/jobTypes");
export const getSkills = () => api.get("/skills");
