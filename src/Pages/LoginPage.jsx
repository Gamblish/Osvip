import React from 'react'
import '../Source/Styles/LoginPage.css'
import { useState } from 'react'
import axios from 'axios'




export default function () {

	const [userLogin, setUserLogin] = useState(null)

	const [userPassword, setUserPassword] = useState(null)

	function handleSubmit(event) {
		alert(userLogin + " " + userPassword)
	}
	function handleChangeLogin(event) {
		setUserLogin(event.target.value);
	}

	function handleChangePassword(event) {
		setUserPassword(event.target.value);
	}

	return (
		<div>
			<form className='ddd' onSubmit={handleSubmit}>
				<input type="text" value={userLogin} onChange={handleChangeLogin} />
				<input type='password' value={userPassword} onChange={handleChangePassword} />
				<button>asd</button>
			</form>

		</div>
	)
}
