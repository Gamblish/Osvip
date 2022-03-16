import React from 'react'

export default function AuthButtons(props) {
	return (
		<div className='MenuBar__Container__UserInfo_AuthButtons'>
			<button className='MenuBar__Container__UserInfo__SignIn' onClick={() => props.setActive('login')}>Войти</button>
			<button className='LoginContainer__Registration' onClick={() => props.setActive('register')}>Создать аккаунт</button>

		</div>
	)
}
