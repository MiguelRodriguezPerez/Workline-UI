import axios from 'axios';

export const buscaApi = axios.create({
    baseURL : 'http://localhost:9001/busca/api',
    headers : {
        'Content-Type' : 'application/json'
    },
    withCredentials : true,
});