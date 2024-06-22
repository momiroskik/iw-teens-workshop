import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

export const teensWorkshopAxiosAuthInstance = axios.create({
  baseURL: "http://localhost:3333/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

teensWorkshopAxiosAuthInstance.interceptors.request.use(
  (requestConfig) => {
    const newRequestConfig = { ...requestConfig };

    const access_token = cookies.get("token");

    newRequestConfig.headers = {
      ...requestConfig.headers,
      Authorization: `${access_token}`,
    };

    return newRequestConfig;
  },
  (error) => Promise.reject(error)
);

export const httpAuth = teensWorkshopAxiosAuthInstance;
export default httpAuth;
