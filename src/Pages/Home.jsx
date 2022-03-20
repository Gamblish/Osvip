import React, { useContext, useEffect, useState } from 'react'
import DepartmentCard from '../Components/DepartmentCard'
import '../Source/Styles/Home.css'
import { Context } from '../Context'



export default function Transfer(props) {
	const { setCurrentPage } = useContext(Context)
	useEffect(() => setCurrentPage('/'), [])

	return (

		<div className='HomeContainer'>
			<div className="HomeContainer__Header">
				<div className='HomeContainer__Header__Text'>

					<span>Перевод и восстановление студентов МАИ
						<br />

						Институт № 3 «Системы управления, информатика и электроэнергетика»</span>

				</div>
			</div>
			<div className="HomeContainer__DepartmentsContainer">
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

				<DepartmentCard />
				<DepartmentCard />
				<DepartmentCard />

			</div>

		</div>

	)
}
