import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../Source/Styles/Login.css'
import Cookies from 'universal-cookie'

import { Context } from '../Context'



export default function Login(props) {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const cookies = new Cookies();
	const { store } = useContext(Context)


	return (
		<div className={props.Active ? ' LoginContainer LoginContainerVisible' : 'LoginContainer'} >
			<form className='LoginContainer__Forms'>
				<p>Логин</p>
				<input placeholder='Логин' type="text" value={email} onChange={e => setEmail(e.target.value)} className='LoginContainer__Forms__LoginForm'
					textarea='font - size: 100px' />
				<p>Пароль</p>
				<input placeholder='Пароль' type="password" value={password} onChange={e => setPassword(e.target.value)} className='LoginContainer__Forms__PassForm' />

				<input type="button" onClick={() => store.login(email, password)} value="Войти" />
			</form>
			<button onClick={() => props.setActive(false)}>Х</button>
		</div >
	)
}
