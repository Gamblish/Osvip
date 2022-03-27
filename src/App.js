
import MenuBar from "./Components/MenuBar";
import Transfer from "./Pages/Transfer";

import { Context } from "./Context";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useLocation
} from 'react-router-dom';
import Home from "./Pages/Home";

import { useEffect, useState, useRef } from "react";
import TDirection from "./Pages/TDirection";

import Tests from "./Pages/Tests";
import Contacts from "./Pages/Contacts";
import NotFound from "./Pages/NotFound";
import Login from "./Components/Login";
import './App.css'
import Store from "./store/Store";
import api, { API_URL } from "./http";
import AuthService from "./services/AuthService";
import Profile from "./Pages/Profile";
import { useLayoutEffect } from "react";
import Test from "./Components/Test";
import AdminPanel from "./Pages/AdminPanel";






function App() {


  const [currentPage, setCurrentPage] = useState('/');
  const [modalActive, setModalActive] = useState(false)
  const [store, setStore] = useState(new Store())
  const [Auth, setAuth] = useState(false)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [imgPath, setImgPath] = useState()
  const [testActivated, setTestActivated] = useState(false)


  function isAuth(data) {
    setLoading(true)
    setAuth(true)

    setUserData(data['userInfo'])
    setImgPath(data['userInfo'].imgPath)
    setTestActivated(data.isNowTesting)
    console.log(data)







  }



  useLayoutEffect(async () => await api.get(API_URL + '/user/info').then(response => {

    isAuth(response.data)
    setLoading(false)



  }


  ).catch(() => setUserData('X')).finally(() => setLoading(false)), [])
  //useLayoutEffect(() => api.get(API_URL + '/user/info').then(response =>
  //response.status == 200 ?
  //setUserData(response.data['userInfo']) : null
  // ), [Auth])

  return (
    <Context.Provider value={{ currentPage, setCurrentPage, store, userData, Auth, setAuth, setModalActive, loading, setLoading, modalActive, setUserData, imgPath, setImgPath, testActivated, setTestActivated }}>
      {userData != null ?
        <div className="App">


          <div className={modalActive ? 'App__PageBlured' : null}>

            <Router>

              {currentPage == "*" ? null : <MenuBar currentPage={currentPage} active={modalActive} setActive={setModalActive} />}
              <div className={currentPage === '*' ? null : 'PageContainer'} >
                <Routes>
                  {userData.role == 0 ? <Route path='admin' element={<AdminPanel />} /> : null}

                  <Route path='/' element={<Home />} />
                  <Route path='/tdirection' element={<TDirection />} />
                  {Auth ?
                    <><Route path='/transfer' element={<Transfer />} />
                      {userData.result === null ? <Route path={!testActivated ? '/tests' : null} element={<Tests />} /> : null}
                      {userData.result === null ? <Route path='/test' element={<Test />} /> : null}
                      <Route path='/profile' element={<Profile />} /></> : null}
                  <Route path='/contacts' element={<Contacts />} />
                  <Route path='*' element={<NotFound />} />


                </Routes>

              </div>

            </Router>
          </div>
          <Login Active={modalActive} setActive={setModalActive} />

        </div>
        : null}
    </Context.Provider>
  );
}

export default App;
