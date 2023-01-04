import axios from "axios";

let baseURL = process.env.NEXT_PUBLIC_API_URL;

export const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  accept: "application/json",
};

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
  headers,
});
