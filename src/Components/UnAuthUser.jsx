import React from 'react'

export default function UnAuthUser(props) {
	return (
		<div className='UnAuthUserContainer'>
			<button onClick={() => props.setActive(true)} className='UnAuthUserContainer__Login'>Войти</button>
		</div>
	)
}
