import React, { useContext, useEffect, useState } from 'react'
import DepartmentCard from '../Components/DepartmentCard'
import '../Source/Styles/Home.css'
import { Context } from '../Context'
import { API_URL } from '../http'
import axios from 'axios'


export default function Transfer(props) {
	const { setCurrentPage } = useContext(Context)
	useEffect(() => setCurrentPage('/'), [])
	const [department, setDepartment] = useState([])
	useEffect(() =>
	(axios.get(API_URL + "/department/all").then(x => {
		setDepartment(x.data)

	}
	)
	), [])

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
				{department.map(item => <DepartmentCard name={item.name} desc={item.description} img={item.imagePath} />)}

			</div>

		</div>

	)
}
