import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Source/Styles/Home.css'
import { Context } from '../Context'
import { useContext } from 'react'
export default function Home(props) {

	const { currentPage, setCurrentPage } = useContext(Context)
	setCurrentPage('/')
	return (

		<div >
			HomeSSSSS

			<Link to='/login'>Войти в айти</Link>

		</div>

	)
}
