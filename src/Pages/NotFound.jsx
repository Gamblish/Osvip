import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import '../Source/Styles/NotFound.css'

import { Plane404Svg } from '../Source/Svgs'

export default function NotFound() {
	const { setCurrentPage } = useContext(Context)
	useEffect(() => setCurrentPage('*'), [])
	return (
		<div className='NotFoundContainer'>

			<div className='NotFoundContainer__StatusCode'>404</div>
			<div className='NotFoundContainer__StatText'>Не найдено</div>
			<Plane404Svg className='NotFoundContainer__Plane' />
			<Link to='/'>pbpb</Link>


		</div>
	)
}
