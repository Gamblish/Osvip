import { AuthResponse } from "../models/response/AuthRespone";
import AuthService from "../services/AuthService";
import { IUser } from "../models/IUser";
import { useContext } from "react";
import { Context } from "../Context";
import api from "../http";
import { Link } from "react-router-dom";

export default class Store {
	user = new IUser();
	isAuth = false;





	setAuth(bool) {
		this.isAuth = bool
		console.log(this.isAuth)
	}

	setUser(user) {
		this.user = user;

	}

	async login(email, password, clear, setAuth) {
		try {
			const response = await AuthService.login(email, password);
			console.log(response)
			localStorage.setItem('access_token', response.data['access_token']);


			clear()
			setAuth(true)
		} catch (e) {
			console.log(e.response?.data?.message)
		}
	}
	async registration(email, password, fcs, setModalActive) {
		try {

			const response = await AuthService.registration(email, password, fcs);
			console.log(response)




			this.user.id = (response.data['userInfo'].id)
			this.user.email = (response.data['userInfo'].email)
			this.user.fcs = (response.data['userInfo'].fcs)
			console.log(this.user)

			setModalActive('register_confirm')


		} catch (e) {
			console.log(e.response?.data?.message)






		}
	}


	async logout(setAuth) {
		try {
			//const response = await AuthService.logout();
			localStorage.removeItem('access_token');
			setAuth(false)
			this.setUser({})

		} catch (e) {
			console.log(e.response?.data?.message)
		}
	}

}