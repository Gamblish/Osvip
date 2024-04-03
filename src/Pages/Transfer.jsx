import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Source/Styles/Home.css'
import { Context } from '../Context'
import { useContext } from 'react'
import axios from 'axios'
import api, { API_URL } from '../http'
import '../Source/Styles/Transfer.css'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import Downshift from 'downshift'
import { SOURCE_URL } from '../http'




export default function Home(props) {
	const [department, setDepartment] = useState([])
	const [direction, setDirection] = useState([])
	const [departmentId, setDepartmentId] = useState()
	const [directionId, setDirectionId] = useState()
	const [semestr, setSemestr] = useState()
	const [course, setCourse] = useState()
	const [telNumber, setTelNumber] = useState()
	const [transferType, setTransferType] = useState()
	const [marksFile, setMarksFile] = useState()
	const [transferFile, setTransferFile] = useState()
	const [error, setError] = useState()
	const [fileMarksName, setFileMarksName] = useState()
	const [fileTransferName, setFileTransferName] = useState()





	function marksFileInfo(e) {
		setMarksFile(e.target.files[0])
		setFileMarksName(e.target.value.split("\\").pop())
		console.log(marksFile)

	}
	function transferFileInfo(e) {
		setTransferFile(e.target.files[0])
		setFileTransferName(e.target.value.split("\\").pop())
		console.log(transferFile)

	}


	function submitAll() {



		var bodyFormData = new FormData();

		bodyFormData.append('Telephone', telNumber)
		bodyFormData.append('Course', course)
		bodyFormData.append('Semester', semestr)
		bodyFormData.append('directionId', directionId)
		bodyFormData.append('departmentId', departmentId)
		bodyFormData.append('RequestType', transferType)
		bodyFormData.append('marks', marksFile)
		bodyFormData.append('application', transferFile)
		console.log(bodyFormData)








		api.post('transfer/new', bodyFormData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'

				}
			}).then(() => setError('Заявка отправлена')).catch(() => setError('Заполните все поля'))


	}










	const { setCurrentPage, store, setAuth } = useContext(Context)
	useEffect(() => setCurrentPage('/transfer'), [])
	const [imgTransfer, setImgTransfer] = useState('')
	const [imgMarks, setImgMarks] = useState('')



	useEffect(() =>
	(axios.get(API_URL + "/directions/all").then(x => {
		setDirection(x.data)

	}
	)
	), [])


	useEffect(() =>
	(axios.get(API_URL + "/department/all").then(x => {
		setDepartment(x.data)

	}
	)
	), [])


	function Validatesemseter(e) {
		e.target.value = e.target.value.replace(/[^\d]/g, '')
	}



	return (



		<div >
			<div className="HomeContainer__Header">
				<div className='HomeContainer__Header__Text ContactsText' >

					<span>Восстановление и перевод студентов ПГУТИ</span>

				</div>
			</div>
			<div className='TransferContainer'>
				<div className='ApplicationContainer'>
					<div className={error == 'Заполните все поля' ? 'ApplicationContainer__Error' : 'ApplicationContainer__Success'}>{error}</div>

					<span>Выберите один вариант ответа</span>
					<form >
						<div className='ApplicationContainer__TransferType'>

							<div className='ApplicationContainer__TransferTypeChoice'>
								<div><input type="radio" id="type1" onChange={() => setTransferType('Восстановление внутри ПГУТИ')}
									name="type" value='recoveryInside' />
									<label for="contactChoice1" >    Восстановление внутри ПГУТИ</label></div>

								<div><input type="radio" id="type2"
									name="type" value="transferInside" onChange={() => setTransferType('Перевод внутри ПГУТИ')} />
									<label for="contactChoice2" >  Перевод внутри ПГУТИ</label></div>

								<div><input type="radio" id="type3"
									name="type" value="fromAnother" onChange={() => setTransferType('Перевод из другого ВУЗа')} />
									<label for="contactChoice3">  Перевод из другого ВУЗа</label></div>
							</div>


						</div>
						<div className='ApplicationContainer__Form'>

							<input type='number' placeholder='Курс' className='ApplicationContainer__Input' value={course} onKeyUpCapture={(e) =>
								Validatesemseter(e)

							} name='Course' onChange={e => setCourse(e.target.value)} />
							<input type='number' placeholder='Семестр' className='ApplicationContainer__Input' maxLength={2} value={semestr} min={1} max={11} onKeyUpCapture={(e) =>
								Validatesemseter(e)

							} name='Semester' onChange={e => setSemestr(e.target.value)} />
							<Downshift
								name=''
								onChange={selection => setDepartmentId(selection.id)}
								itemToString={item => (item ? 'Кафедра' + ' ' + item.name : '')}
							>
								{({
									getInputProps,
									getItemProps,
									getLabelProps,
									getMenuProps,
									isOpen,
									inputValue,
									highlightedIndex,
									selectedItem,
								}) => (
									<div>

										<input value={departmentId} placeholder="Кафедра" className="ApplicationContainer__Input" {...getInputProps()} />
										<ul className="li" {...getMenuProps()}>
											{isOpen
												? department
													.filter(item => !inputValue || item.name.includes(inputValue))
													.map((item, index) => (
														<li className="li"
															{...getItemProps({
																key: item.name,
																index,
																item,
																style: {
																	backgroundColor:

																		highlightedIndex === index ? '#bbbfc9' : '#cad5f4',

																	maxWidth: '550px',
																	minHeight: '31px',
																	display: 'flex',
																	justifyContent: 'center',
																	flexDirection: 'column',
																	marginTop: '1px',




																	borderRadius: '4px',









																},
															})}
														>
															{'Кафедра ' + item.name}
														</li>
													))
												: null}
										</ul>
									</div>
								)
								}
							</Downshift >
							<Downshift
								onChange={selection => setDirectionId(selection.id)}
								itemToString={item => (item ? item.name + ' ' + item.code : '')}
							>
								{({
									getInputProps,
									getItemProps,
									getLabelProps,
									getMenuProps,
									isOpen,
									inputValue,
									highlightedIndex,
									selectedItem,
								}) => (
									<div>

										<input value={directionId} placeholder="Направление подготвки " className="ApplicationContainer__Input" {...getInputProps()} />
										<ul className="li" {...getMenuProps()}>
											{isOpen
												? direction
													.filter(item => !inputValue || item.name.includes(inputValue))
													.map((item, index) => (
														<li
															{...getItemProps({
																key: item.name,
																index,
																item,
																style: {
																	backgroundColor:

																		highlightedIndex === index ? '#bbbfc9' : '#cad5f4',

																	maxWidth: '550px',
																	minHeight: '31px',
																	display: 'flex',
																	justifyContent: 'center',
																	flexDirection: 'column',
																	marginTop: '1px',



																	borderRadius: '4px',









																},
															})}
														>
															{item.name + ' ' + item.code}
														</li>
													))
												: null}
										</ul>
									</div>
								)
								}
							</Downshift >





							<PhoneInput inputClass='ApplicationContainer__InputTel' containerClass='ApplicationContainer__Input' country={"ru"}
								enableAreaCodes={true}
								onlyCountries={["ru"]}
								areaCodes={{ ru: ["+7"] }}
								specialLabel=''


								type='tel' value={telNumber} placeholder='Номер телефона' className='ApplicationContainer__Input' required={true} onChange={value => setTelNumber(value)} />







							<label for='imgTransfer' className='imgLabel'>Прикрепить заявление на восстановление/перевод  <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.9312 4.53C16.3362 1.9425 13.685 0 10.5 0C7.97125 0 5.775 1.23 4.68125 3.03C2.0475 3.27 0 5.1825 0 7.5C0 9.9825 2.35375 12 5.25 12H16.625C19.04 12 21 10.32 21 8.25C21 6.27 19.2062 4.665 16.9312 4.53ZM12.25 6.75V9.75H8.75V6.75H6.125L10.5 3L14.875 6.75H12.25Z" fill="black" fill-opacity="0.5" />
							</svg>
							</label>
							<input id="imgTransfer" type='file' accept="application/pdf" onChange={(e) => transferFileInfo(e)} />
							<div className='FileName'>{fileTransferName}</div>
							<label for='imgMarks' className='imgLabel'>Прикрепить справку об обучении (с оценками)  <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.9312 4.53C16.3362 1.9425 13.685 0 10.5 0C7.97125 0 5.775 1.23 4.68125 3.03C2.0475 3.27 0 5.1825 0 7.5C0 9.9825 2.35375 12 5.25 12H16.625C19.04 12 21 10.32 21 8.25C21 6.27 19.2062 4.665 16.9312 4.53ZM12.25 6.75V9.75H8.75V6.75H6.125L10.5 3L14.875 6.75H12.25Z" fill="black" fill-opacity="0.5" />
							</svg>
							</label>
							<input id="imgMarks" type='file' accept="application/pdf" onChange={(e) => marksFileInfo(e)} />
							<div className='FileName'>{fileMarksName}</div>


						</div>
					</form>
					<button className='ApplicationContainer__SubmitButton' onClick={() => submitAll()}>Отправить данные</button>



				</div>
				<div className='ExamplesContainer'>
					<a href={SOURCE_URL + '/Source/TransferExample.pdf'} target='_blank' ><span>Образец заявления на восстановление/

						<br />
						перевод внутри ПГУТИ</span></a>

					<a href={SOURCE_URL + '/Source/TransferExample.pdf'} target='_blank'><span>Образец заявления на
						<br />
						перевод из другого ВУЗа</span></a>
				</div>
			</div >
		</div >

	)
}
