import React from 'react'

export default function PasswordRules() {
	return (
		<div className='PasswordRulesContainer'>
			<div className='arrow'></div>
			<ul >
				<li>Не короче 6 букв и цифр</li>
				<li>Пароль должен содержать минимум 1 букву нижнего и верхнего регистра</li>
				<li>Пароль должен содержать минимум 1 спецсимвол</li>

			</ul>
		</div>
	)
}
