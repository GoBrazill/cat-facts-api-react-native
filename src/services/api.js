import axios from "axios";

const api = axios.create({
    baseURL: 'https://catfact.ninja/fact'
})

export default api