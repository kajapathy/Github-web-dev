/*import './App.css';
import ThemeConsumer from './Theme/ThemeConsumer';
import ThemeProvider from './Theme/ThemeProvieder';
//import ThemeContext from './Theme/ThemeContext';

function App() {

  return(
    <div>
      <ThemeProvider>
      <ThemeConsumer/>
      </ThemeProvider>

    </div>  );
}


export default App;
*/


/*import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'


const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme ? current_theme : 'light'); 

  useEffect(()=>{localStorage.setItem('current_theme',theme)},[theme])
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
} 

export default App*/


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterForm from './pages/RegisterForm';

import './App.css'; 
//import { Contact } from './pages/Contact';


function App() {
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); 
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} setTheme={toggleTheme} /> 
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} /> 
          <Route path="/services" element={<Service theme={theme} />} /> 
          <Route path="/contact" element={<Contact theme={theme} />} /> 
          <Route path="/About" element={<About theme={theme} />} /> 
          <Route path="/registerForm" element={<RegisterForm theme={theme} />} />
          

          

        </Routes>
      </div>
    </Router>
  );
}

export default App;




