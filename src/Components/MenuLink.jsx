import React from 'react'
import { HomeSvg } from '../Source/Svgs'
import { Link } from 'react-router-dom'

export default function MenuLink(props) {
   
  return (
    <div>
        <Link to={props.to}  >
						<li className={props.currentPage == props.to ? "MenuBar__Container__Links__Active" : null}>

						<props.icon currentPage={props.currentPage} to={props.to} />
							<span > {props.LinkName}</span>

						</li>
					</Link>

    </div>
  )
}
