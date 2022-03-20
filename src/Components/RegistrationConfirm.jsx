import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import { Context } from '../Context'
import api, { API_URL } from '../http'





export default function RegistrationConfirm() {
	const { setModalActive, password, setPasswordEqual, userData, store, setAuth } = useContext(Context)
	const [confirmCode, setConfirmCode] = useState('')
	const [error, setError] = useState('')


	function confirmed(access) {
		setModalActive(false)
		setAuth(true)
		localStorage.setItem('access_token', access)


	}




	function submitHandler() {
		console.log(confirmCode)



		api.post(API_URL + '/user/confirmEmail', { userId: store.user.id, code: confirmCode })
			.then(response => response.status == 200 ?
				confirmed(response.data['access_token'])





				: setError('Неправильный код подтверждения')).catch(setError('Неправильный код подтверждения'))






	}

	return (
		<div className=' LoginContainer LoginContainerVisible'>


			<button className='LoginContainer__CloseButton' onClick={() => setModalActive(false)} >╳</button>
			<div className='LoginContainer__EmailMessage'>На  почту {store.user.email}  отправлен код подтверждения </div>
			<form className='LoginContainer__Forms'>

				<input className='LoginContainer__Forms__Input' type='text' value={confirmCode} placeholder='' onChange={e => setConfirmCode(e.target.value)} />
				<div className='LoginContainer__ConfirmCodeError'>{error}</div>





			</form >
			<button className='LoginContainer__Forms__Button' onClick={submitHandler}>Отправить</button>
		</div >

	)
}
