import axios from "axios";

export const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    // 'ADS-Key':ADS_KEY
  },
  baseURL: process.env.NODE_ENV === "development" ? process.env.BASE_URL_DEV : process.env.BASE_URL,
});
