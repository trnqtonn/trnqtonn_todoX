import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"; // Thay đổi URL cơ sở của API dựa trên môi trường

const api = axios.create({
  baseURL: BASE_URL,
}); // Thay đổi URL cơ sở của API

export default api;
