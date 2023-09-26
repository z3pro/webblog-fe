import axiosInstance from "../utils/axios";

const getAllAticles = (params: any) => axiosInstance.get(`/aticles`);
const getDetailAticles = (id: any) => axiosInstance.get(`/aticles/get-id/${id}`);
const addAticles = (params: any) => axiosInstance.post(`/aticles/add`, params);
const editAticles = (id: any, params: any) => axiosInstance.put(`/aticles/${id}`, params);
const removeAticles = (id: any) => axiosInstance.delete(`/aticles/${id}`);
const addUserLikeAticles = (idUser: any, idAticles: any) => axiosInstance.post(`/aticles/add/${idUser}/to/${idAticles}`);
const removeUserLikeAticles = (idUser: any, idAticles: any) => axiosInstance.post(`/aticles/delete/${idUser}/to/${idAticles}`);
export { addAticles, editAticles, getAllAticles, getDetailAticles, removeAticles,addUserLikeAticles,removeUserLikeAticles};
