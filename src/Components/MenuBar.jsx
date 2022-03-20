import React, { useEffect, useState, useRef, useContext } from 'react'
import '../Source/Styles/MenuBar.css'
import Samolet from '../Source/Images/Samolet.png'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../Context'
import MenuLink from './MenuLink'
import { ContactsSvg, DeclarationsSvg, HomeSvg, TDirectionSvg, TestsSvg, TRansferSvg, ExitSvg } from '../Source/Svgs'
import MenuBarProfile from './MenuBarProfile'
import AuthButtons from './AuthButtons'







export default function MenuBar(props) {
	const { Auth, setAuth, userData, loading, store, setCurrentPage } = useContext(Context)




	return (






		<div className={props.currentPage === '*' ? 'MenuBarHidden' : 'MenuBar'}>
			<div className="MenuBar__Container">

				<div className="MenuBar__Container__Logo">
					<svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 17.9343V34.0029H24.2582V31.4657M1 17.9343H24.2582V20.4714M1 17.9343L6.95636 10.5343L8.65818 16.8771L13.48 2.5L16.8836 16.8771L21.1382 10.5343L24.2582 16.8771M24.2582 20.4714H13.48L4.40364 31.4657H24.2582M24.2582 20.4714V31.4657M50.7143 17.9343V39.5L63.1429 13.6771V34.1857M65.9527 34.0029V17.9343H79V34.0029M28.5127 17.9343V34.0029H47.5164V25.9686H33.6182L47.5164 17.9343H28.5127Z" stroke="#3C8FFF" />
					</svg>

					{Auth ? <Link to='/'><button onClick={() => store.logout(setAuth)}><ExitSvg /></button></Link> : null}



				</div>

				<div className="MenuBar__Container__Line"></div>
				<div className='MenuBar__Container__UserInfo'>
					{loading ? null : (Auth ? <MenuBarProfile /> :
						<AuthButtons setActive={props.setActive} />)}
				</div>




				<div className="MenuBar__Container__LineTwo"></div>

				<ul className="MenuBar__Container__Links">

					<MenuLink currentPage={props.currentPage} LinkName='Главная' to='/' icon={HomeSvg} />

					<MenuLink currentPage={props.currentPage} LinkName='Направление подготовки' to='/tdirection' icon={TDirectionSvg} />
					{Auth ? <><MenuLink currentPage={props.currentPage} LinkName='Восстановление и перевод' to='/transfer' icon={TRansferSvg} /><MenuLink currentPage={props.currentPage} LinkName='Тестирование' to='/tests' icon={TestsSvg} /></> : null}
					<MenuLink currentPage={props.currentPage} LinkName="Контакты" to='/contacts' icon={ContactsSvg} />

				</ul>






			</div>


		</div >

	)
}


