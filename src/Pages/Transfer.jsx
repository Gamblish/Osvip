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




export default function Home(props) {
	const items = [
		{ name: 'ПИРВА КАФИДРА' },
		{ name: 'ВТОРА КАФИДРА' },
		{ name: 'ТРЕТЯ КАФИДРА' },
		{ name: 'ЧЕТВЭРТА КАФИДРА' },
		{ name: 'ПЯТА КАФИДРА' },
	]


	const { setCurrentPage, store, setAuth } = useContext(Context)
	useEffect(() => setCurrentPage('/transfer'), [])
	const [imgTransfer, setImgTransfer] = useState('')
	const [imgMarks, setImgMarks] = useState('')

	function Validatesemseter(e) {
		e.target.value = e.target.value.replace(/[^\d]/g, '')
	}



	return (



		<div >
			<div className="HomeContainer__Header">
				<div className='HomeContainer__Header__Text ContactsText' >

					<span>Восстановление и перевод студентов МАИ</span>

				</div>
			</div>
			<div className='TransferContainer'>
				<div className='ApplicationContainer'>
					<span>Выберите один вариант ответа</span>
					<form className='ApplicationContainer__TransferType'>

						<div className='ApplicationContainer__TransferTypeChoice'>
							<div><input type="radio" id="type1"
								name="type" value='recoveryInside' />
								<label for="contactChoice1">    Восстановление внутри МАИ</label></div>

							<div><input type="radio" id="type2"
								name="type" value="transferInside" />
								<label for="contactChoice2">  Перевод внутри МАИ</label></div>

							<div><input type="radio" id="type3"
								name="type" value="fromAnother" />
								<label for="contactChoice3">  Перевод из другого ВУЗа</label></div>
						</div>


					</form>
					<form className='ApplicationContainer__Form'>

						<input type='number' placeholder='Курс' className='ApplicationContainer__Input' onKeyUpCapture={(e) =>
							Validatesemseter(e)

						} />
						<input type='number' placeholder='Семестр' className='ApplicationContainer__Input' maxLength={2} min={1} max={11} onKeyUpCapture={(e) =>
							Validatesemseter(e)

						} />
						<Downshift
							onChange={selection => alert(`You selected ${selection.name}`)}
							itemToString={item => (item ? item.name : '')}
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

									<input placeholder="Напревление специальности" className="ApplicationContainer__Input" {...getInputProps()} />
									<ul className="li" {...getMenuProps()}>
										{isOpen
											? items
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
														{item.name}
													</li>
												))
											: null}
									</ul>
								</div>
							)
							}
						</Downshift >
						<Downshift
							onChange={selection => alert(`You selected ${selection.name}`)}
							itemToString={item => (item ? item.name : '')}
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

									<input placeholder="Кафедра" className="ApplicationContainer__Input" {...getInputProps()} />
									<ul className="li" {...getMenuProps()}>
										{isOpen
											? items
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
														{item.name}
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

							type='tel' placeholder='Номер телефона' className='ApplicationContainer__Input' required={true} />







						<label for='imgTransfer' className='imgLabel'>Прикрепить заявление на восстановление/перевод  <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.9312 4.53C16.3362 1.9425 13.685 0 10.5 0C7.97125 0 5.775 1.23 4.68125 3.03C2.0475 3.27 0 5.1825 0 7.5C0 9.9825 2.35375 12 5.25 12H16.625C19.04 12 21 10.32 21 8.25C21 6.27 19.2062 4.665 16.9312 4.53ZM12.25 6.75V9.75H8.75V6.75H6.125L10.5 3L14.875 6.75H12.25Z" fill="black" fill-opacity="0.5" />
						</svg>
						</label>
						<input id="imgTransfer" type='file' accept="image/png, image/jpeg" onChange={(e) => setImgTransfer(e.target.value.split("\\").pop())} />
						<div className='FileName'>{imgTransfer}</div>
						<label for='imgMarks' className='imgLabel'>Прикрепить справку об обучении (с оценками)  <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.9312 4.53C16.3362 1.9425 13.685 0 10.5 0C7.97125 0 5.775 1.23 4.68125 3.03C2.0475 3.27 0 5.1825 0 7.5C0 9.9825 2.35375 12 5.25 12H16.625C19.04 12 21 10.32 21 8.25C21 6.27 19.2062 4.665 16.9312 4.53ZM12.25 6.75V9.75H8.75V6.75H6.125L10.5 3L14.875 6.75H12.25Z" fill="black" fill-opacity="0.5" />
						</svg>
						</label>
						<input id="imgMarks" type='file' accept="image/png, image/jpeg" onChange={(e) => setImgMarks(e.target.value.split("\\").pop())} />
						<div className='FileName'>{imgMarks}</div>

						<button className='ApplicationContainer__SubmitButton'>Отправить данные</button>
					</form>



				</div>
				<div className='ExamplesContainer'>
					<div><span>Образец заявления на восстановление/

						<br />
						перевод внутри МАИ</span></div>
					<div><span>Образец заявления на
						<br />
						перевод из другого ВУЗа</span></div>
				</div>
			</div>
		</div>

	)
}
