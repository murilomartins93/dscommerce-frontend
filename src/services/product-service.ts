import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findPageRequest(page: number, name: string, size = 12, sort="name,desc") {
  
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/products",
    params: {
      page: page,
      name,
      size: size,
      sort
    }
  };

  return requestBackend(config);
}

export function findById(id: number) {
  return requestBackend({ url: `/products/${id}`});
}
