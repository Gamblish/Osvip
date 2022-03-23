import axios from "axios";

import Cookies from "universal-cookie";

export const API_URL = 'http://172.20.10.9:7239/api'
export const SOURCE_URL = 'http://172.20.10.9:7239'

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