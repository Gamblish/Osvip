import { AuthResponse } from "../models/response/AuthRespone";
import AuthService from "../services/AuthService";
import { IUser } from "../models/IUser";
import { useContext } from "react";
import { Context } from "../Context";
import api from "../http";

export default class Store {
	user = { IUser }
	isAuth = false;




	setAuth(bool) {
		this.isAuth = bool
		console.log(this.isAuth)
	}

	setUser(user) {
		this.user = user;

	}

	async login(email, password, clear, setAuth, setFCS, UserData) {
		try {
			const response = await AuthService.login(email, password);
			console.log(response)
			localStorage.setItem('token', response.data['token']);
			UserData(setAuth, setFCS)
			this.setUser(response.data[0])
			clear()
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	}
	async registration(email, password) {
		try {
			const response = await AuthService.registration(email, password);
			console.log(response)
			localStorage.setItem('token', response.data['token']);
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