import api from "../http";

export default class AuthService {
	static async login(email, password) {
		return api.post('Account/Login', { email, password })

	}
	FCS = ''

	static async registration(email, password) {
		return api.post('/registration', { email, password })

	}

	static async logout() {
		return api.post('/logout')

	}

	static async UserData(setAuth, setFCS) {
		setAuth(true)

		api.get('http://192.168.43.127:7239/api/Account/UserInfo').then(response => setFCS(response.data["userInfo"]["fcs"]))
	}

}

