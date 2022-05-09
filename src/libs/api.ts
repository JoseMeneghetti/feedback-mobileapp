import axios from 'axios'

export const api = axios.create({
    baseURL: "https://feedback-impulse-production.up.railway.app/"
})