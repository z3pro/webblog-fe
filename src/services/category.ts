import axiosInstance from "../utils/axios";

const getAllCategory = () => axiosInstance.get(`/category`);
const getDetailCategory = (id: any) => axiosInstance.get(`/category/get-id/${id}`);
const addCategory = (params: any) => axiosInstance.post(`/category/add`, params);
const editCategory = (id: any, params: any) => axiosInstance.put(`/category/${id}`, params);
const removeCategory = (id: any) => axiosInstance.delete(`/category/${id}`);
const addAticlesToCategory = (idAticles: any, idCategory: any) => axiosInstance.post(`/category/${idAticles}/to/${idCategory}`);
const removeAticlesToCategory = (idAticles: any, idCategory: any) => axiosInstance.post(`/category/${idAticles}/to/${idCategory}`);
export { getAllCategory, getDetailCategory, addAticlesToCategory, addCategory, editCategory, removeAticlesToCategory, removeCategory };