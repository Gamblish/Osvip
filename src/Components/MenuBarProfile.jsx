
import Samolet from '../Source/Images/Samolet.png'
import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'
import { SOURCE_URL } from '../http'

export default function MenuBarProfile() {

	const { userData, setLoading, imgPath, setImgPath } = useContext(Context)

	return (
		<div className='MenuBar__Container__UserInfo'>
			<div className='MenuBar__Container__UserInfo__Photo'>
				<Link to='/profile'>
					<img src={SOURCE_URL + imgPath} alt="" />
				</Link>


			</div>



			<div className="MenuBar__Container__UserInfo__FCS">
				{userData.fcs}
			</div>


		</div>


	)
}
