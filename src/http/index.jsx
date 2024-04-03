import axios from "axios";

import Cookies from "universal-cookie";

export const API_URL = 'https://osvip.bsite.net//api'
export const SOURCE_URL = 'https://osvip.bsite.net/:5000'

const cookies = new Cookies();


const api = axios.create({
	withCredentials: true,
	baseURL: API_URL

})

api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`

	return config;
})

export default api;