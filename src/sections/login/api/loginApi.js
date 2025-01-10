import axios from "axios";

export const loginApi = axios.create({
    baseURL : 'http://localhost:9001/auth',
    headers : {
        "Content-Type" : 'application/json'
    },
    withCredentials : true
})