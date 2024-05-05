import api from "./api";

export const generateCertificate = async(username:string, course:string)=>{
    return api.get(`/certificate/generate-pdf/${username}/${course}`);
}