import axiosInstance from "../utils/axios";

const postLogin = (params: any) => axiosInstance.post(`/auth/signin`, params);
const postRegister = (params: any) => axiosInstance.post(`/auth/signup`, params);
const postRefreshToken = (params: any) => axiosInstance.post(`/auth/refresh-token`, params);
const getUserFromJWT = (params: any) => axiosInstance.post('/auth/getUserWithAccessToken', params)
export { postLogin, postRegister, postRefreshToken,getUserFromJWT };