import { AuthResponse } from "../models/response/AuthRespone";
import AuthService from "../services/AuthService";
import { IUser } from "../models/IUser";

export default class Store {
	user = { IUser }
	isAuth = false;


	setAuth(bool) {
		this.isAuth = bool
	}

	setUser(user) {
		this.user = user;

	}

	async login(email, password) {
		try {
			const response = await AuthService.login(email, password);
			console.log(response)
			localStorage.setItem('token', response.data['access_token']);
			this.setAuth(true)
			this.setUser(response.data[0])
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	}
	async registration(email, password) {
		try {
			const response = await AuthService.registration(email, password);
			console.log(response)
			localStorage.setItem('token', response.data['access_token']);
			this.setAuth(true)
			this.setUser(response.data[0])
		} catch (e) {
			console.log(e.response?.data?.message)
		}

	}


	async logout() {
		try {
			const response = await AuthService.logout();
			localStorage.removeItem('token',);
			this.setAuth(false)
			this.setUser({})
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	}

}