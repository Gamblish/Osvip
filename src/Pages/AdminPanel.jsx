import React from 'react'
import { useEffect } from 'react'
import api, { SOURCE_URL } from '../http'
import axios from 'axios'
import { useState } from 'react'
import { useRef } from 'react'
import { API_URL } from '../http'
import Select from 'react-select';



export default function () {
	const [departmentName, setDepartmentName] = useState()
	const [departmentDescription, setDepartmentDescription] = useState()
	const [directionGroup, setDirectionGroup] = useState()
	const [directionCode, setDirectionCode] = useState()
	const [directionType, setDirectionType] = useState()
	const [directionLevel, setDirectionLevel] = useState()
	const [count, setCount] = useState(0)
	const [department, setDepartment] = useState()
	const [departmentId, setDepartmentId] = useState()
	const [courseId, setCourseId] = useState()
	const [error, setError] = useState('')
	const [course, setCourse] = useState([
		{ value: 1, label: 1 },
		{ value: 2, label: 2 },
		{ value: 3, label: 3 },

		{ value: 4, label: 4 },
		{ value: 5, label: 5 },
		{ value: 6, label: 6 },



	])
	const [question, setQuestion] = useState(
		{



			question: "",
			responses: [
				{
					response: "", weigth: 0,
				},
				{
					response: "", weigth: 0,
				},
				{
					response: "", weigth: 0,
				},
				{
					response: "", weigth: 0,
				},
				{
					response: "", weigth: 0,
				},
			]


		})

	function addQuestion(text) {
		question.question = text


	}
	useEffect(() =>
	(axios.get(API_URL + "/department/all").then(x => {
		const departmentOptions = x.data.map(y => new Object({ value: y.name, label: 'Кафедра ' + y.name, id: y.id }))
		setDepartment(departmentOptions)



	}
	)
	), [])





	function addResponse(text, index) {
		question.responses[index].response = text

	}





	function addWeight(weight, index) {
		question.responses[index].weigth = weight



	}





	const [questions, setQuestions] = useState([])




	function departmentSubmit() {
		api.post('/admin/add-department', { name: departmentName, description: departmentDescription })
	}




	function directionSubmit() {
		api.post('/admin/add-direction', { name: directionGroup, code: directionCode, level: directionLevel, form: directionType })
	}





	const x = useRef(null)




	function addQuestionToTest() {
		questions.push(question)
		setQuestion({



			question: "",
			responses: [
				{
					response: "", weight: 0,
				},
				{
					response: "", weight: 0,
				},
				{
					response: "", weight: 0,
				},
				{
					response: "", weight: 0,
				},
				{
					response: "", weight: 0,
				},
			]


		})

		x.current.reset()
		setCount(count + 1)


	}




	function testSubmit() {
		api.post('/admin/add-test', { department: { id: departmentId }, course: courseId, question: questions }).then(() => setQuestions([])).then(() => setError('Тест успешно добавлен')).then(setCount(0)).catch(() => setError('ОШИБКА ТЕСТ НЕ ДОБАВЛЕН'))

	}






	return (
		<div className='Admin'>
			<br />
			<div>ДОБАВЛЕНИ КАФЕДРЫ</div>
			<br />
			<form>

				<input placeholder='Name' className='LoginContainer__Forms__Input' type='text' onChange={e => setDepartmentName(e.target.value)} />
				<br />
				<input placeholder='Description' className='LoginContainer__Forms__Input' type='text' onChange={e => setDepartmentDescription(e.target.value)} />
				<br />



			</form>
			<button className='ApplicationContainer__SubmitButton' onClick={() => departmentSubmit()}>ОТПРАВИТЬ</button>
			<br />
			<br />
			<div>ДОБАВЛЕНИЕ НАПРАВЛЕНИЯ</div>
			<br />
			<br />
			<form>

				<input placeholder='Группа' className='LoginContainer__Forms__Input' type='text' onChange={e => setDirectionGroup(e.target.value)} />
				<br />
				<input placeholder='Код' className='LoginContainer__Forms__Input' type='text' onChange={e => setDirectionCode(e.target.value)} />
				<br />
				<input placeholder='Форма обучения' className='LoginContainer__Forms__Input' type='text' onChange={e => setDirectionType(e.target.value)} />
				<br />
				<input placeholder='Уровень' className='LoginContainer__Forms__Input' type='text' onChange={e => setDirectionLevel(e.target.value)} />
				<br />



			</form>
			<button className='ApplicationContainer__SubmitButton' onClick={() => directionSubmit()}>АТПРАВИТЬ </button>
			<br />
			<br />

			<div>ДОБАВЛЕНИЕ ТЕСТА</div>
			<br />
			<br />
			<div>{error}</div>
			<br />
			<br />


			<form ref={x}>
				<Select className='TetstContainer__CourseSelect' placeholder='Кафедра'

					onChange={e => setDepartmentId(e.id)}

					options={department}
				/>
				<br />
				<Select className='TetstContainer__CourseSelect' placeholder='Курс'

					onChange={e => setCourseId(e.value)}

					options={course}
				/>
				<br />
				<br />
				<div>ДОБАВИТЬ ВОПРОС</div>
				<br />
				<br />
				<div>Вопросов {count}</div>
				<br />
				<br />

				<input placeholder='вопрос' className='LoginContainer__Forms__Input' type='text' onChange={e => addQuestion(e.target.value)} />
				<br />


				<input placeholder='ответ' className='LoginContainer__Forms__Input' type='text' onChange={e => addResponse(e.target.value, 0)} />
				<input placeholder='вес' className='LoginContainer__Forms__Input' type='text' onChange={e => addWeight(Number(e.target.value), 0)} />
				<br />
				<input placeholder='ответ' className='LoginContainer__Forms__Input' type='text' onChange={e => addResponse(e.target.value, 1)} />
				<input placeholder='вес' className='LoginContainer__Forms__Input' type='text' onChange={e => addWeight(Number(e.target.value), 1)} />
				<br />
				<input placeholder='ответ' className='LoginContainer__Forms__Input' type='text' onChange={e => addResponse(e.target.value, 2)} />
				<input placeholder='вес' className='LoginContainer__Forms__Input' type='text' onChange={e => addWeight(Number(e.target.value), 2)} />
				<br />
				<input placeholder='ответ' className='LoginContainer__Forms__Input' type='text' onChange={e => addResponse(e.target.value, 3)} />
				<input placeholder='вес' className='LoginContainer__Forms__Input' type='text' onChange={e => addWeight(Number(e.target.value), 3)} />
				<br />
				<input placeholder='ответ' className='LoginContainer__Forms__Input' type='text' onChange={e => addResponse(e.target.value, 4)} />
				<input placeholder='вес' className='LoginContainer__Forms__Input' type='text' onChange={e => addWeight(Number(e.target.value), 4)} />
				<br />
			</form>
			<button className='ApplicationContainer__SubmitButton' onClick={() => addQuestionToTest()}>ДОБАВИТЬ ВОПРОС</button>
			<br />
			<br />
			<br />
			<button className='ApplicationContainer__SubmitButton' onClick={() => testSubmit()}>ОТПРАВИТЬ ТЕСТ</button>


		</div>
	)
}
