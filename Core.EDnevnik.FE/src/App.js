// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import RegisterForm from './components/RegisterForm';
import './App.css';
import logo from './assets/logo.png';
import { jwtDecode } from 'jwt-decode';
import AllStudents from './components/AllStudents';
import EvidentenList from './components/EvidentenList';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const user = localStorage.getItem('access_token');
    if(user){
      const decodedToken = jwtDecode(localStorage.getItem('access_token'));
      if (decodedToken) {
        setLoggedIn(true);
        setUser(decodedToken);
      }
    }
    
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li>
              <Link to="/">Дома</Link>
            </li>
            {loggedIn && (
              <>
              {/* <li>
                  <Link to="/about">About</Link>
                </li> */}
                {user.role_id==1 && (
                  <li>
                  <Link to="/allstudents">Преглед на оцени</Link>
                </li>  
                )}
                {user.role_id == 2 && (
                  <li>
                    <Link to="/evidentenlist">Евидентен лист</Link>
                  </li>
                )}
                <li>
                  <Link to="/contact">Контакт</Link>
                </li>
                </>
            )}
            
            {!loggedIn ? (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            ) : (
              <li>
                <button className='btn btn-danger' onClick={handleLogout}>Одјави се</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allstudents" element={<AllStudents />} />
          <Route path="/evidentenlist" element={<EvidentenList student={user}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
