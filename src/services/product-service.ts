import { AxiosRequestConfig } from "axios";
import { ProductDTO } from "../models/product";
import { requestBackend } from "../utils/requests";

export function findPageRequest(
  page: number,
  name: string,
  size = 12,
  sort = "name,desc"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/products",
    params: {
      page: page,
      name,
      size: size,
      sort,
    },
  };

  return requestBackend(config);
}

export function findById(id: number) {
  return requestBackend({ url: `/products/${id}` });
}

export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/products/${id}`,
    withCredentials: true,
  };

  return requestBackend(config);
}

export function updateRequest(obj: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/products/${obj.id}`,
    withCredentials: true,
    data: obj,
  };

  return requestBackend(config);
}

export function insertRequest(obj: ProductDTO) {
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/products/",
    withCredentials: true,
    data: obj,
  };
  
  return requestBackend(config);
}
