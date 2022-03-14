
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







function App() {

  const [currentPage, setCurrentPage] = useState('/');
  const [modalActive, setModalActive] = useState(false)
  const store = new Store();

  return (
    <Context.Provider value={{ currentPage, setCurrentPage, store }}>
      <div className="App">


        <div className={modalActive ? 'App__PageBlured' : null}>

          <Router>

            {currentPage == "*" ? null : <MenuBar currentPage={currentPage} />}
            <div className={currentPage === '*' ? null : 'PageContainer'} >
              <Routes>

                <Route path='/' element={<Home active={modalActive} setActive={setModalActive} />} />
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
        <Login Active={modalActive} setActive={setModalActive} />

      </div>
    </Context.Provider>
  );
}

export default App;
