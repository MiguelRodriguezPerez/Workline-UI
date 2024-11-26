import axios from "axios";

export const nuevaCuentaApi = axios.create({
    baseURL : 'http://localhost:9001/nuevaCuenta/api',
    headers : {
        'Content-Type' : 'application/json'
    },
    withCredentials : true
});