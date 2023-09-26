import axiosInstance from "../utils/axios";
const getAllFile = () => axiosInstance.get(`/google-drive/`);
const getDetailFile = (id: any) => axiosInstance.get(`/google-drive/list/${id}`);
const uploadFile = (params: any) => axiosInstance.post(`/google-drive/upload`, params);
export { getDetailFile, uploadFile,getAllFile };