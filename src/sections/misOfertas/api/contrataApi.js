import axios from "axios";

export const contrataApi = axios.create({
    baseURL: 'http://localhost:9001/contrata/api',
    headers:{
        'Content-Type' : 'application/json',
    },
    withCredentials: true,
})