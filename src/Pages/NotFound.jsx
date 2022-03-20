import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context'
import '../Source/Styles/NotFound.css'
import Pingvin from '../Source/Images/Pingvin.png'
import { Plane404Svg } from '../Source/Svgs'

export default function NotFound() {
	const { setCurrentPage } = useContext(Context)
	useEffect(() => setCurrentPage('*'), [])
	return (
		<div className='NotFound'>
			<div className='NotFoundLogo'><svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 17.9343V34.0029H24.2582V31.4657M1 17.9343H24.2582V20.4714M1 17.9343L6.95636 10.5343L8.65818 16.8771L13.48 2.5L16.8836 16.8771L21.1382 10.5343L24.2582 16.8771M24.2582 20.4714H13.48L4.40364 31.4657H24.2582M24.2582 20.4714V31.4657M50.7143 17.9343V39.5L63.1429 13.6771V34.1857M65.9527 34.0029V17.9343H79V34.0029M28.5127 17.9343V34.0029H47.5164V25.9686H33.6182L47.5164 17.9343H28.5127Z" stroke="#3C8FFF" />
			</svg>
			</div>
			<div className='NotFoundContainer'>

				<div className='NotFoundContainer__StatusCode'>404</div>
				<div className='NotFoundContainer__StatText'>cтраница не найдена </div>
				<div className='NotFoundContainer__DescText'>Cтраница, на которую Вы пытаетесь попасть,</div>
				<div className='NotFoundContainer__DescTextDeleted'>не существует или была удалена.</div>

				<div></div>
				<Link className='NotFoundContainer__LinkToHome' to='/'>Вернуться на сайт</Link>


			</div>
			<div className='NotFoundPenguin'><img src={Pingvin} alt="" /></div>
		</div>
	)
}
