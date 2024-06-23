import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";

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

teensWorkshopAxiosAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const errorMessage =
      err?.response?.data?.message || "Something went wrong :)";

    toast.error(errorMessage);

    return Promise.reject(err);
  }
);

export const httpAuth = teensWorkshopAxiosAuthInstance;
export default httpAuth;
