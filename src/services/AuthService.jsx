import api from "../http";

export default class AuthService {
	static async login(email, password) {
		return api.post('user/login', { email, password })

	}

	static async registration(email, password, fcs) {
		return api.post('user/register', { email, password, fcs })

	}

	static async logout() {
		return api.post('/logout')

	}


}
	
