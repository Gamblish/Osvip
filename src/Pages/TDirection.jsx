import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import DirectionRow from '../Components/DirectionRow'
import { Context } from '../Context'
import '../Source/Styles/TDirection.css'
import axios from 'axios'
import { API_URL } from '../http'



export default function TDirection() {
  const { setCurrentPage } = useContext(Context)
  const [directions, setDirections] = useState([])
  useEffect(() => setCurrentPage('/tdirection'), [])
  useEffect(() =>
  (axios.get(API_URL + "/directions/all").then(x => {
    setDirections(x.data)

  }
  )
  ), [])

  return (
    <div>
      <div className="HomeContainer__Header">
        <div className='HomeContainer__Header__Text TDirectionText'>

          <span>Направления подготовки</span>

        </div>
      </div>

      <div className='DirectionsContainer'>
        <div className='DirectionsContainer__Header'>
          Наименование Конкурсной Группы
        </div>
        <div className='DirectionsContainer__Header'>
          Код Направления Подготовки

        </div>
        <div className='DirectionsContainer__Header'>
          Форма обучения

        </div>
        <div className='DirectionsContainer__Header'>
          Уровень Образования
        </div>

      </div>
      {directions.map(item => <DirectionRow name={item.name} code={item.code} form={item.form} level={item.level} />)}




    </div>
  )
}
