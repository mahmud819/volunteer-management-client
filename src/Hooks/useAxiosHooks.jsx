import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://volunteer-website-server-mu.vercel.app",
  // baseURL: 'https://volunteer-website-server-mu.vercel.app',
  // withCredentials : true,
});
const useAxiosHooks = () => {
  return axiosInstance;
};

export default useAxiosHooks;
