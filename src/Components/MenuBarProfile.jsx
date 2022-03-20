
import Samolet from '../Source/Images/Samolet.png'
import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import { Link } from 'react-router-dom'

export default function MenuBarProfile() {

	const { userData, setLoading } = useContext(Context)

	return (
		<div className='MenuBar__Container__UserInfo'>
			<div className='MenuBar__Container__UserInfo__Photo'>
				<Link to='/profile'>
					<img src={Samolet} alt="" />
				</Link>


			</div>



			<div className="MenuBar__Container__UserInfo__FCS">
				{userData.fcs}
			</div>


		</div>


	)
}
