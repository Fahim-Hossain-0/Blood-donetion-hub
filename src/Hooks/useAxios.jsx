import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://blood-donation-web-server.vercel.app`,
     withCredentials: true
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;