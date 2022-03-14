
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
import Declarations from "./Pages/Declarations";
import Tests from "./Pages/Tests";
import Contacts from "./Pages/Contacts";
import NotFound from "./Pages/NotFound";
import Login from "./Components/Login";
import './App.css'
import Store from "./store/Store";
import api from "./http";
import AuthService from "./services/AuthService";






function App() {

  const [currentPage, setCurrentPage] = useState('/');
  const [modalActive, setModalActive] = useState(false)
  const [store, setStore] = useState(new Store())
  const [Auth, setAuth] = useState(false)
  const [FCS, setFCS] = useState('')
  useEffect(() => api.get('http://192.168.43.127:7239/api/Account/UserInfo').then(response => {
    response.status == 200 ?
      AuthService.UserData(setAuth, setFCS)
      : setAuth(false);
    console.log(response)

  }
  )


    , [])
  useEffect(() => store.setAuth(Auth), [Auth])
  return (
    <Context.Provider value={{ currentPage, setCurrentPage, store }}>
      <div className="App">


        <div className={modalActive ? 'App__PageBlured' : null}>

          <Router>

            {currentPage == "*" ? null : <MenuBar FCS={FCS} currentPage={currentPage} active={modalActive} setActive={setModalActive} Auth={Auth} setAuth={setAuth} />}
            <div className={currentPage === '*' ? null : 'PageContainer'} >
              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/tdirection' element={<TDirection />} />
                <Route path='/transfer' element={<Transfer />} />

                <Route path='/declarations' element={<Declarations />} />
                <Route path='/tests' element={<Tests />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<NotFound />} />


              </Routes>

            </div>

          </Router>
        </div>
        <Login Active={modalActive} UserData={AuthService.UserData} setAuth={setAuth} setFCS={setFCS} setActive={setModalActive} />

      </div>
    </Context.Provider>
  );
}

export default App;
