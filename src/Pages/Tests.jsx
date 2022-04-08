import { useEffect, useContext, useState } from "react"
import React from 'react'
import { Context } from "../Context"
import '../Source/Styles/Tests.css'
import Select from 'react-select';
import axios from "axios";
import api, { API_URL } from "../http";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";

export default function Tests() {

  const [course, setCourse] = useState([
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },

    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },



  ])
  const [department, setDepartment] = useState([])
  const [departmentId, setDepartmentId] = useState()
  const [courseId, setCourseId] = useState()
  const [test, setTest] = useState([])




  useEffect(() =>
  (axios.get(API_URL + "/department/all").then(x => {

    const departmentOptions = x.data.map(y => new Object({ value: y.name, label: 'Кафедра ' + y.name, id: y.id }))
    setDepartment(departmentOptions)


  }
  )
  ), [])
  const history = useNavigate();

  function Submit() {
    api.post('/Tests/test', { departmentId, course: courseId }).then(() => history('/test')).catch(console.log(departmentId))



  }


  const { setCurrentPage } = useContext(Context)
  useEffect(() => setCurrentPage('/tests'), [])
  return (
    <div>
      <div className="HomeContainer__Header">
        <div className='HomeContainer__Header__Text TestsHeader'>

          <span>Тестирование</span>

        </div>
      </div>
      <div className="TetstContainer" >
        <div className="TetstContainer__Selections" >
          <Select className='TetstContainer__CourseSelect' placeholder='Кафедра'

            onChange={e => setDepartmentId(e.id)}

            options={department}
          />

          <Select className='TetstContainer__CourseSelect' placeholder='Курс'

            onChange={e => setCourseId(e.value)}

            options={course}
          />
          <button className="TetstContainer__Submit" onClick={() => Submit()} > Пройти тестирование</button>

        </div>



      </div>






    </div >
  )
}

