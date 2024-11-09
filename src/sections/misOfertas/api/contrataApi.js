import axios from "axios";
import Cookies from 'js-cookie';

export const contrataApi = axios.create({
    baseURL: 'http://localhost:9001/contrata/api',
    headers:{
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + Cookies.get('jwtToken')
    },
    withCredentials: true,
})