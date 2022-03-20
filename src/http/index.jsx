import axios from "axios";

import Cookies from "universal-cookie";

export const API_URL = 'http://192.168.162.127:7239/api'

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