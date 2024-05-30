import axios from "axios";

const useAxiosUrl = () => {
    const axiosUrl = axios.create({
        baseURL: 'http://localhost:2000',
        // baseURL: 'https://ph-11-as-server.vercel.app',
      });
    return axiosUrl
};

export default useAxiosUrl;