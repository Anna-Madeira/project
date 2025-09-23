import axios from "axios";

import { errorInterceptor, responseInterceptor } from "./interceptors";
import { Environment } from "@/app/shared/environment";

const Api = axios.create({
    baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
  (response) => responseInterceptor(response),
    (error) => errorInterceptor(error),
);

export {Api};