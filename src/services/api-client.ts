import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];

  // for pagination with react-query
  next: string | null;
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b4e71ec132f047af819b1ee886cdd98e",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
