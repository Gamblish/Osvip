import React from 'react'
import '../Source/Styles/DepartmentCard.css'
import { API_URL, SOURCE_URL } from '../http'

import MAI from '../Source/Images/MAI.png'

export default function DepartmentCard(props) {
	return (

		<div className='DepartmentCard'>

			<div className='DepartmentCard__Img'>
				<a href={'https://mai.ru/education/studies/institutes/control/' + props.name + '/'}>
					<img src={SOURCE_URL + '/Source/Images/Departments/' + props.img} alt="" />
				</a>
			</div>

			<div>
				<div className="DepartmentCard__Name">
					<span>Кафедра {props.name} </span>
				</div>
				<div className="DepartmentCard__Desc">
					{props.desc}
				</div>

			</div>




		</div>



	)
}
