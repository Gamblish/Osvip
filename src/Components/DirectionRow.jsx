import React from 'react'

export default function DirectionRow(props) {
	return (
		<div className='DirectionsContainer'>
			<div>{props.name}</div>
			<div>{props.code}</div>
			<div>{props.form}</div>
			<div>{props.level}</div>
		</div>
	)
}
