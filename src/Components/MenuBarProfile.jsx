
import Samolet from '../Source/Images/Samolet.png'
import React from 'react'

export default function MenuBarProfile(props) {
	return (
		<div className='MenuBar__Container__UserInfo'>
			<div className='MenuBar__Container__UserInfo__Photo'>

				<img src={Samolet} alt="" />


			</div>

			<div className="MenuBar__Container__UserInfo__FCS">
				{props.FCS}
			</div>

		</div>


	)
}
