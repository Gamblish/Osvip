import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import '../Source/Styles/Login.css'


import { Context } from '../Context'
import LoginForm from './LoginForm'
import RegistrationFormContainer from './RegistrationFormContainer'
import RegistrationConfirm from './RegistrationConfirm'



export default function Login(props) {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const { store, setModalActive, setAuth, modalActive } = useContext(Context)
	function clearLoginForm() {
		setPassword('')
		setEmail('')
		setModalActive(false)

	}
	function renderSwitch(param) {
		switch (param) {
			case 'login':
				return <LoginForm />
			case 'register':
				return <RegistrationFormContainer />
			case 'register_confirm':
				return <RegistrationConfirm />
			default:
				return null

		}
	}



	return (
		<div className={props.Active ? ' AuthContainer LoginContainerVisible' : 'AuthContainer'} >



			{
				renderSwitch(modalActive)
			}


		</div >
	)
}
