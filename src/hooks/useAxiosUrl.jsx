import axios from "axios";

const useAxiosUrl = () => {
    const axiosUrl = axios.create({
        baseURL: 'http://localhost:2000',
      });
    return axiosUrl
};

export default useAxiosUrl;