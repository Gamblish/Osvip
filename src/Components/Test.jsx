import React from 'react'
import { Context } from '../Context'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import api, { API_URL } from '../http'
import axios from 'axios'
import ResponseOption from './ResponseOption'
import { useTimer } from 'use-timer';
import Moment from "react-moment";
import { useLayoutEffect } from 'react'
import Timer from './Timer'

import { useNavigate } from "react-router-dom";


export default function Test() {

	const [tests, setTests] = useState()
	const { setCurrentPage, store, setAuth, userData, setTestActivated } = useContext(Context)
	const [questionNumber, setQuestionNumber] = useState(0)
	const [apiTime, setApiTime] = useState()
	const [myTime, setMyTime] = useState()
	const [answerIds, setAnswerIds] = useState([])

	const History = useNavigate();



	function SubmitAnswers() {
		api.post('/Tests/answer', answerIds).then(x => userData.result = x.data).then(() => History('/profile'))
	}




	useEffect(() =>
	(api.post(API_URL + "/Tests/user/test").then(x => {
		console.log(x)
		setTests(x.data)

		setTestActivated(true)

		var s = new Date(x.data.testStartTime)
		setApiTime((
			(Number((s.getHours()) * 3600)) +
			(Number(s.getMinutes()) * 60) +
			(Number(s.getSeconds()))
		))
		var i = Date.now()

		var tpme = new Date(i)

		setMyTime(((Number(tpme.getHours()) * 3600) + (Number(tpme.getMinutes()) * 60) + (Number(tpme.getSeconds()))))

		console.log(x.data)


	}

	)

	), [])

	function saveAnswer(value) {
		answerIds[questionNumber] = value
		console.log(answerIds)


	}

	useEffect(() => setCurrentPage('/test'), [])





	return (
		<div>

			<div className="HomeContainer__Header">
				<div className='HomeContainer__Header__Text TestsHeader'>

					<span>Тестирование</span>

				</div>
			</div>
			<div className='TestContainer'>
				<div className='TestContainer__Timer'>
					<span>Выберите один вариант ответа:</span>
					{apiTime != null && myTime != null ? <Timer userData={userData} answerIds={answerIds} myTime={myTime} apiTime={apiTime} /> : null}

				</div>
				<div className='TestContainer__QuestionContainer'>
					<span className='TestContainer__QuestionContainer__Number' >Вопрос №: {questionNumber + 1}.</span>
					<span className='TestContainer__QuestionContainer__Question'>{tests != null ? tests.test.question[questionNumber].question : 'Загрузка...'}</span>


				</div>

				<div className='TestContainer__Answers'>
					<div className='TestContainer__Answers__ResponseOptions'>

						{tests != null ? tests.test.question[questionNumber].responses.map(x => <ResponseOption answerIds={answerIds} key={questionNumber + '' + x.id} saveAnswer={saveAnswer} response={x} />) : 'Загрузка...'}


					</div>
				</div>
				<div className='TestContainer__NavigateButtons'>
					{questionNumber == 0 ? null : <button onClick={() => setQuestionNumber(questionNumber - 1)}>
						Предыдущий вопрос

					</button>}
					{tests != null ? tests.test.question.length == questionNumber + 1 ? null : <button onClick={() => setQuestionNumber(questionNumber + 1)}>
						Следующий вопрос

					</button> : null}
				</div>


			</div>
			<button className='SubmitButton' onClick={SubmitAnswers}>Отправить</button>


		</div>
	)
}
