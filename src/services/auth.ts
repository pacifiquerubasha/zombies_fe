import api from "./api";

export const register = async(data : any) => {
    return await api.post('/auth/register', data
    );    
}

export const login = async(data : any) => {
    return await api.post('/auth/login', data);
}


export const getUser = async(id:string)=>{
    return await api.get(`/users/${id}`);
}

export const forgotPassword = async(userName:string)=>{
    return await api.post('/auth/forgot-password', {userName});
}

export const resetPassword = async(password:string, code:string)=>{
    return await api.post(`/auth/reset-password/${code}`, {password});
}