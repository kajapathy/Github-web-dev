/*import React from 'react'
import './Navbar.css'
import logo_light from '../../assests/logo-black.png'
import logo_dark from '../../assests/logo-white.png'
import search_icon_light from '../../assests/search-w.png'
import search_icon_dark from '../../assests/search-b.png'
import toogle_light from '../../assests/night.png'
import toogle_dark from '../../assests/day.png'



const Navbar = ({theme,setTheme}) => {
    const toggle_mode =() => {
        theme=='light'  ? setTheme('dark'): setTheme('light');
    }
      


  return (
    <div className='navbar'>
      
      <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>

      <u1>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </u1>
      

      <div className='search-box'>
        <input type="text" placeholder='search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt=""/>
      </div>

      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toogle_light : toogle_dark} alt="" className='toggle-icon' />
    </div>
  )
}

export default Navbar*/


import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo_light from '../../assests/logo-black.png'
import logo_dark from '../../assests/logo-white.png'
import search_icon_light from '../../assests/search-w.png'
import search_icon_dark from '../../assests/search-b.png'

import toggle_light from '../../assests/night.png'

import toggle_dark from '../../assests/day.png'

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`navbar ${theme}`}>
      <img src={theme === 'light' ? logo_light : logo_dark} alt="logo" className='logo' />

      <ul>
        <li><Link to="/" className={theme}>Home</Link></li>
        <li><Link to="/about" className={theme}>About</Link></li>
        <li><Link to="/contact" className={theme}>Contact</Link></li>
        <li><Link to="/services" className={theme}>Services</Link></li>
        <li><Link to="/registerForm" className={theme}>RegisterForm</Link></li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="search-icon" />
      </div>

      <img onClick={toggle_mode} src={theme === 'light' ? toggle_light : toggle_dark} alt="toggle-icon" className='toggle-icon' />
    </div>
  );
};

export default Navbar;