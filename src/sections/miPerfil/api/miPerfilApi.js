import axios from "axios";

export const miPerfilApi = axios.create({
    baseURL: 'http://localhost:9001/user',
    headers: {
        'Content-Type' : 'application/json'
    },
    withCredentials: true
});