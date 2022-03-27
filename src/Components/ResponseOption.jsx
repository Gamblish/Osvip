import React from 'react'

export default function ResponseOption(props) {
	return (

		<div><input type="radio" id="type1"
			name="type" onChange={() => props.saveAnswer(props.response.id)}
		/>
			<label for="contactChoice1" > {props.response.response}</label></div>

	)
}
