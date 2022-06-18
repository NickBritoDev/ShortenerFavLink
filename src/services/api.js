import axios from "axios";

export const key = "25cc56b2ee4237a3af2ca587c537bbc88bb46570"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})
export default api;