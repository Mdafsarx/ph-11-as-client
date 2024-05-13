import axios from "axios";

const useAxiosUrl = () => {
    const axiosUrl = axios.create({
        // baseURL: 'https://ph-11-as-server.vercel.app',
        baseURL: 'https://ph-11-as-server.vercel.app',
      });
    return axiosUrl
};

export default useAxiosUrl;