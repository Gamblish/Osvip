
import Samolet from '../Source/Images/Samolet.png'
import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'

export default function MenuBarProfile() {

	const { userData, setLoading } = useContext(Context)

	return (
		<div className='MenuBar__Container__UserInfo'>
			<div className='MenuBar__Container__UserInfo__Photo'>

				<img src={Samolet} alt="" />


			</div>



			<div className="MenuBar__Container__UserInfo__FCS">
				{userData.fcs}
			</div>


		</div>


	)
}
