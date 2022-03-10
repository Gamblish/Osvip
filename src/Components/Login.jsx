import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Source/Styles/Login.css'
import Cookies from 'universal-cookie'



export default function Login(props) {
	const [password, setPassword] = useState('')
	const [login, setLogin] = useState('')
	const cookies = new Cookies();

	const handleSubmit = () => {
		const data = {
			email: login,
			password: password,
			rememberMe: true
		}
		axios.defaults.withCredentials = true;
		axios.post('https://192.168.43.165:7231/api/Account/Login', data, {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
			"Access-Control-Allow-Headers": ",set-cookie,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"

		}).then((response) => cookies.set("token", response)
		);
	}

	return (
		<div className={props.Active ? ' LoginContainer LoginContainerVisible' : 'LoginContainer'} >
			<form >
				<input type="Email" value={login} onChange={e => setLogin(e.target.value)} />
				<input type="password" value={password} onChange={e => setPassword(e.target.value)} />

				<input type="button" onClick={handleSubmit} value="Отправить" />
			</form>
			<button onClick={() => props.setActive(false)}>Х</button>
		</div >
	)
}
