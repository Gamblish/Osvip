import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DepartmentCard from '../Components/DepartmentCard'
import '../Source/Styles/Transfer.css'
import { Context } from '../Context'



export default function Transfer(props) {
	const { currentPage, setCurrentPage } = useContext(Context)
	setCurrentPage('transfer')

	return (

		<div className='TransferContainer'>
			<div className="TransferContainer__Header">
				<div className='TransferContainer__Header__Text'>

					<span>Перевод и восстановление студентов МАИ
						<br />

						Институт № 3 «Системы управления, информатика и электроэнергетика»</span>

				</div>
			</div>
			<div className="TransferContainer__DepartmentsContainer">
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />


			</div>

		</div>

	)
}
