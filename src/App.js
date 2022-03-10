
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
import LoginPage from "./Pages/LoginPage";
import { useEffect, useState, useRef } from "react";
import TDirection from "./Pages/TDirection";
import Declarations from "./Pages/Declarations";
import Tests from "./Pages/Tests";
import Contacts from "./Pages/Contacts";






function App() {

  const [currentPage, setCurrentPage] = useState('/');

  return (
    <Context.Provider value={{ currentPage, setCurrentPage }}>
      <div className="App">

        <Router>
          <MenuBar currentPage={currentPage} />
          <div className='PageContainer' >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/tdirection' element={<TDirection />} />
              <Route path='/transfer' element={<Transfer />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/declarations' element={<Declarations />} />
              <Route path='/tests'element={<Tests/>} />
              <Route path='/contacts' element={<Contacts/>}/>


            </Routes>
          </div>
        </Router>


      </div>
    </Context.Provider>
  );
}

export default App;
