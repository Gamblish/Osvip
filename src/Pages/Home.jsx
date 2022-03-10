import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Source/Styles/Home.css'
import { Context } from '../Context'
import { useContext } from 'react'
export default function Home(props) {

	const { setCurrentPage } = useContext(Context)
	useEffect(() => setCurrentPage('/'), [])



	return (

		<div >
			HomeSSSSS

			<Link to='/login'>Войти в айти</Link>

			<button onClick={() => props.setActive(true)}>Войты</button>

		</div>

	)
}
