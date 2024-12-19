import { apiClient, apiClientUpload } from "./api";
import {
  BASE_URL,
  GET_METHOD,
  IMAGE_BASE_URL,
  POST_METHOD,
  UPLOAD_IMAGE,
  LOGIN,
  GET_PROFILE

} from "./url";

export const uploadImage = (payload) => {
  console.log("uploadImage--->", payload);
  return apiClientUpload({
    baseURL: IMAGE_BASE_URL,
    method: POST_METHOD,
    url: UPLOAD_IMAGE,
    data: payload,
  });
};

export const getSlots = () => {
  return apiClient({
    baseURL: BASE_URL,
    method: GET_METHOD,
    url: SLOT,
  });
};


export const AuthLogin = (payload) => {
  console.log('===payload',payload)
  return apiClient({
    baseURL: BASE_URL,
    method: POST_METHOD,
    url: LOGIN,
    data:payload
  });
};

export const getProfile = () => {
  
  return apiClient({
    baseURL: BASE_URL,
    method: GET_METHOD,
    url: GET_PROFILE,
  });
};

