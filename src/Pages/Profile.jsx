import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'
import { useEffect } from 'react'
import '../Source/Styles/Profile.css'
import Negr from '../Source/Images/Negr.jpg'
import { useState } from 'react'
import { IUser } from '../models/IUser'
import { SOURCE_URL } from '../http'
import api from '../http'

export default function Profile() {
	const { setCurrentPage, store, setAuth, userData, setUserData, imgPath, setImgPath } = useContext(Context)
	useEffect(() => setCurrentPage('/profile'), [])
	const fcsSplit = userData.fcs.split(' ')
	const [img, setImg] = useState('')






	function ChangeImg(response) {
		console.log(response)
		setImgPath(response.data)




		console.log(userData)
	}
	function submitImg(e) {

		setImg(e.target.files[0])
		var bodyFormData = new FormData();
		bodyFormData.append('image', e.target.files[0])


		api.put('/user/change-image', bodyFormData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'

				}
			}).then(response => ChangeImg(response))
		console.log(img)



	}
	return (

		<div >
			<div className="HomeContainer__Header">
				<div className='HomeContainer__Header__Text ContactsText' >

					<span>Личный кабинет</span>

				</div>
			</div>
			<div className='ProfileContainer'>
				<div className='ProfileContainer__Avatar'>
					<div className='ProfileContainer__Avatar__Container'>
						<img src={SOURCE_URL + imgPath} alt="" />
					</div>
					<div className='ProfileContainer__Avatar__Input'>
						<form  >
							<label for='imgMarks' ><svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3.125 3.83337V0.958374H5.20833V3.83337H8.33333V5.75004H5.20833V8.62504H3.125V5.75004H0V3.83337H3.125ZM6.25 9.58337V6.70837H9.375V3.83337H16.6667L18.5729 5.75004H21.875C23.0208 5.75004 23.9583 6.61254 23.9583 7.66671V19.1667C23.9583 20.2209 23.0208 21.0834 21.875 21.0834H5.20833C4.0625 21.0834 3.125 20.2209 3.125 19.1667V9.58337H6.25ZM13.5417 18.2084C16.4167 18.2084 18.75 16.0617 18.75 13.4167C18.75 10.7717 16.4167 8.62504 13.5417 8.62504C10.6667 8.62504 8.33333 10.7717 8.33333 13.4167C8.33333 16.0617 10.6667 18.2084 13.5417 18.2084ZM10.2083 13.4167C10.2083 15.113 11.6979 16.4834 13.5417 16.4834C15.3854 16.4834 16.875 15.113 16.875 13.4167C16.875 11.7205 15.3854 10.35 13.5417 10.35C11.6979 10.35 10.2083 11.7205 10.2083 13.4167Z" fill="black" fill-opacity="0.5" />
							</svg>
								<span>Загрузить фото</span>
							</label>
							<input id="imgMarks" type='file' accept="image/png, image/jpeg, image/gif" onChange={(e) => submitImg(e)} />
						</form>
					</div>




				</div>
				<div className='FCSContainer'>
					Фамилия:
					<div>{fcsSplit[0]}</div>
					<span>Имя:</span>
					<div>{fcsSplit[1]}</div>
					<span>Отчество:</span>
					<div>{fcsSplit[2]}</div>
				</div>
				<div className='DataContainer FCSContainer '>
					Результат тестирования:
					<div>1000 баллов</div>
					<span>e-mail:</span>
					<div>{userData.email}</div>


				</div>
			</div>
			<div className='ProfileChangePassword'>Сменить пароль</div>

		</div >
	)
}
