import React from 'react'
import { Context } from '../Context'
import { useState, useContext } from 'react'

export default function LoginForm() {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')


	const { store, setModalActive, setAuth, } = useContext(Context)
	function clearLoginForm() {

		setPassword('')
		setEmail('')
		setModalActive(false)

	}
	return (

		<div className=' LoginContainer LoginContainerVisible'>
			<button className='LoginContainer__CloseButton' onClick={() => clearLoginForm()} >╳</button>
			<svg className='LoginContainer__Logo' width="200" height="150" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 17.9343V34.0029H24.2582V31.4657M1 17.9343H24.2582V20.4714M1 17.9343L6.95636 10.5343L8.65818 16.8771L13.48 2.5L16.8836 16.8771L21.1382 10.5343L24.2582 16.8771M24.2582 20.4714H13.48L4.40364 31.4657H24.2582M24.2582 20.4714V31.4657M50.7143 17.9343V39.5L63.1429 13.6771V34.1857M65.9527 34.0029V17.9343H79V34.0029M28.5127 17.9343V34.0029H47.5164V25.9686H33.6182L47.5164 17.9343H28.5127Z" stroke="#3C8FFF" />
			</svg>
			<form className='LoginContainer__Forms'>

				<input placeholder='Email' type="email" value={email} onChange={e => setEmail(e.target.value)} className='LoginContainer__Forms__Input'
					textarea='font - size: 100px' />

				<input placeholder='Пароль' type="password" value={password} onChange={e => setPassword(e.target.value)} className='LoginContainer__Forms__Input' />
				<div className='LoginContainer__ForgotPass'>Забыли пароль?</div>


				<input className='LoginContainer__Forms__Button' type="button" onClick={() => store.login(email, password, clearLoginForm, setAuth)} value="Войти" />

				<button className='LoginContainer__Registration' onClick={() => setModalActive('register')}>Создать аккаунт</button>

			</form>
		</div>

	)
}
