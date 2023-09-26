import axiosInstance from "~/utils/axios";

const getAllBlog = (params: any) => axiosInstance.get(`/blog`);
const getDetailBlog = (id: any) => axiosInstance.get(`/blog/get-id/${id}`);
const addBlog = (params: any) => axiosInstance.post(`/blog/add`, params);
const editBlog = (id: any, params: any) => axiosInstance.put(`/blog/${id}`, params);
const removeBlog = (id: any) => axiosInstance.delete(`/blog/${id}`);
const addUserLikeBlog = (idUser: any, idAticles: any) => axiosInstance.post(`/blog/add/${idUser}/to/${idAticles}`);
const removeUserLikeBlog = (idUser: any, idAticles: any) => axiosInstance.post(`/blog/delete/${idUser}/to/${idAticles}`);
export {getAllBlog,getDetailBlog,addBlog,editBlog,removeBlog,addUserLikeBlog,removeUserLikeBlog}