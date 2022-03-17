import React from 'react'
import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { Context } from '../Context'
import PasswordRules from './PasswordRules'

export default function RegistrationFormContainer() {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [passwordEqual, setPasswordEqual] = useState(false)
	const [fcs, setFcs] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState('Email Не может быть пустым')
	const [passwordError, setPasswordError] = useState('Пароль Не может быть пустым')
	const [formValid, setFormValid] = useState(false)
	const [passwordEqualDirty, setPasswordEqualDirty] = useState(false)


	useEffect(() =>

		setFormValid(!(emailError || passwordError || !passwordEqual))

		, [emailError, passwordError, passwordEqual])




	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)


				break;
			case 'password':
				setPasswordDirty(true)
				break

			case 'passwordEqual':
				setPasswordEqualDirty(true)
				break


		}
	}

	const emailHandler = (e) => {
		setEmail(e.target.value)

		const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		if (e.target.value == '') {
			setEmailError('Email не может быть пустым')
		}


		else if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError('Некорректный Email')
			setEmailDirty(false)




		}
		else {
			setEmailError('')
			setEmailDirty(false)

		}

	}
	const registerHandler = () => {

		store.registration(email, password, fcs, setModalActive)


	}

	const passwordHandler = (e) => {
		setPassword(e.target.value)

		const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,64})");
		if (e.target.value == '') {
			setPasswordError('Пароль не может быть пустым')
		}



		else if (!re.test(String(e.target.value))) {
			setPasswordError('Ненадежный пароль')



		}
		else {
			setPasswordError('')
		}
	}



	const { store, setModalActive, setAuth, userData } = useContext(Context)
	function clearLoginForm() {
		setFcs('')
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
				<input placeholder='ФИО' type="text" value={fcs} onChange={e => setFcs(e.target.value)} className='LoginContainer__Forms__Input' required={true}
					textarea='font - size: 100px' />




				<input placeholder='Email' onBlur={e => blurHandler(e)} name='email' type="email" value={email} onChange={e => emailHandler(e)} className='LoginContainer__Forms__Input'
					textarea='font - size: 100px' />


				{(emailDirty && emailError) && <div className='LoginContainer__Error' > {emailError}</div>}




				<input placeholder='Пароль' onBlur={e => blurHandler(e)} name='password' type="password" value={password} onChange={e => passwordHandler(e)} className='LoginContainer__Forms__Input' />

				{passwordError == 'Ненадежный пароль' ? <PasswordRules /> : null}


				{(passwordDirty && passwordError) && <div className='LoginContainer__Error' >{passwordError}</div>}



				<input placeholder='Подтвердите пароль' name='passwordEqual' onBlur={e => blurHandler(e)} type="password" onChange={e => (e.target.value != password ? setPasswordEqual(false) : setPasswordEqual(true))} className='LoginContainer__Forms__Input' />
				{passwordEqualDirty ? (passwordEqual ? null : <div className='LoginContainer__Forms__PasswordEqualError' >Пароли не совпадают</div>) : null}




				<input disabled={!formValid} className='LoginContainer__Forms__Button' type="button" onClick={() => registerHandler()} value="Зарегистрироваться" />

				<button className='LoginContainer__Registration' onClick={() => setModalActive('login')}>Войти</button>


			</form >
		</div >

	)
}
