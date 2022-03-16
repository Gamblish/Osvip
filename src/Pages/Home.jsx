import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Source/Styles/Home.css'
import { Context } from '../Context'
import { useContext } from 'react'
import axios from 'axios'
import api, { API_URL } from '../http'
export default function Home(props) {

	const { setCurrentPage, store, setAuth } = useContext(Context)
	useEffect(() => setCurrentPage('/'), [])

	function test() {


	}



	return (



		<div >
			HomeSSSSS

			<Link to='/login'>Войти в айти</Link>

			<button onClick={() => store.logout(setAuth)}>XYOI</button>
			<button onClick={() => test()}> asdasdasdsadsa</button>

		</div>

	)
}
