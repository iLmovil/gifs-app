import axios from 'axios'

export const gifsApi = axios.create({
    baseURL: 'https://api.giphy.com'
})