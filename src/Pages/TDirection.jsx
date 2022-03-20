import React, { useContext, useEffect } from 'react'
import DirectionRow from '../Components/DirectionRow'
import { Context } from '../Context'
import '../Source/Styles/TDirection.css'
export default function TDirection() {
  const { setCurrentPage } = useContext(Context)
  useEffect(() => setCurrentPage('/tdirection'), [])

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
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />

      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />

      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />
      <DirectionRow name={"HUI"} code={"HUI"} form={"HUI"} level={"Xer"} />




    </div>
  )
}
