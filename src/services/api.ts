import axios from "axios";

// export const ASSETS_URL = "https://teamakatsuki.maurice.webcup.hodi.host/api/";
const api = axios.create({
    baseURL: "https://teamakatsuki.maurice.webcup.hodi.host/api",
    withCredentials: false,
});


api.interceptors.response.use(
(response) => response, 
(error) => {
    if (error?.response?.status === 401 || error?.response?.data?.message?.toLowerCase().includes("authentication")){
        console.error("NOT AUTHENTICATED..........................", error)
    } 
        
    return Promise.reject(error);
});

export default api;