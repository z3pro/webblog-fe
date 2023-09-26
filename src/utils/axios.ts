import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    //handle error call api 
    async (error) => {

    }
);
export default axiosInstance;