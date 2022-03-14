import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Source/Styles/Home.css'
import { Context } from '../Context'
import { useContext } from 'react'
import axios from 'axios'
import api, { API_URL } from '../http'
export default function Home(props) {

	const { setCurrentPage } = useContext(Context)
	useEffect(() => setCurrentPage('/'), [])

	function test() {
		axios.get('http://192.168.43.127:5870/WeatherForecast').then(response => console.log(response))

	}



	return (



		<div >
			HomeSSSSS

			<Link to='/login'>Войти в айти</Link>

			<button onClick={() => props.setActive(true)}>Войты</button>
			<button onClick={() => test()}> asdasdasdsadsa</button>

		</div>

	)
}
