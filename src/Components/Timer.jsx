import React from 'react'
import { useTimer } from 'use-timer';
import { useNavigate } from "react-router-dom";
import api from '../http';





export default function Timer(props) {
	const History = useNavigate();
	const { time, start, pause, reset, status, advanceTime } = useTimer({
		endTime: 900,
		autostart: true,
		initialTime: Number(props.myTime) - Number(props.apiTime),
		timerType: 'INREMENTAL',
		step: 1,
		onTimeOver: () => {
			api.post('/Tests/answer', props.answerIds).then(x => props.userData.result = x.data).then(() => History('/profile'))

		}





	});



	return (
		<span>Осталось времени:{Math.floor((900 - time) / 60) + ':' + ((900 - time) % 60)} </span>
	)
}
