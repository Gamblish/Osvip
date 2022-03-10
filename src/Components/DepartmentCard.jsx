import React from 'react'
import '../Source/Styles/DepartmentCard.css'

import MAI from '../Source/Images/MAI.png'

export default function DepartmentCard() {
	return (
		
		<div className='DepartmentCard'>
			<div className='DepartmentCard__Img'>
				<img src={MAI} alt="" />
			</div>
			<div>
				<div className="DepartmentCard__Name">
					<span>Кафедра 301</span>
				</div>
				<div className="DepartmentCard__Desc">
					На кафедре 301 ведутся фундаментальные и прикладные научные исследования в области систем управления, информационно-телекоммуникационных систем и программно-аппаратных средств.
				</div>
			</div>


		</div>


	)
}
