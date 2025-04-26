import axios from "axios"

const BASE_URL="http://localhost:4001/api"
export const api=axios.create({   
    baseURL:BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
})