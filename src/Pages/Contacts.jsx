import React, { useEffect, useContext } from 'react'
import { Context } from '../Context'

export default function Contacts() {
  const { setCurrentPage } = useContext(Context)
  useEffect(() => setCurrentPage('/contacts'), [])
  return (

    <div>
      <div className="HomeContainer__Header">
        <div className='HomeContainer__Header__Text ContactsText' >

          <span>Контакты</span>

        </div>
      </div>
      <div className='Contacts__Container'>
        <span>Наименование ВУЗа:</span>
        <p>Федеральное государственное бюджетное образовательное учреждение высшего образования
          «Московский авиационный институт (национальный исследовательский университет)»
          Институт № 3 «Системы управления, информатика и электроэнергетика»</p>

        <span>Юридический и почтовый адрес:</span>
        <p>Волоколамское шоссе, д. 4, г. Москва, 125993</p>

        <span>По вопросам восстановления/перевода обращаться по электронной почте:</span>
        <p>vice_dean3@mai.ru</p>

        <span>Дирекция готова ответить на Ваши вопросы по электронной почте:</span>
        <p>mai-dep3@yandex.ru</p>

        <span>Телефоны:</span>
        <p>+79251688864, +79251688712</p>
      </div>
    </div>
  )
}
