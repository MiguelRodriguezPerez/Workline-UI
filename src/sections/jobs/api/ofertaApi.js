import axios from "axios";

export const ofertaApi = axios.create({
    baseURL : 'http://localhost:9001/ofertas/api',
    headers : {
        "Content-Type" : 'application/json'
    },
    withCredentials : true
})