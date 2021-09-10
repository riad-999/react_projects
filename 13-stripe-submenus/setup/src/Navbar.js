import React from 'react'
import { useGlobalContext } from './context'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

const Navbar = () => { 
  const {open_sidebar,close_submenu,open_submenu} = useGlobalContext();
  
  // handlers
  const handle_submenu = (event) => {
    if(!event.target.classList.contains("link-btn")){
      close_submenu();
    }
  }
  const display_submenu = (event) => {
    const btn = event.currentTarget;
    const btn_coordinates = btn.getBoundingClientRect();
    const btn_text = btn.textContent.trim();
    const center = (btn_coordinates.left + btn_coordinates.right) / 2 ;
    const bottom = btn_coordinates.bottom - 3 ;
    open_submenu(btn_text,{center,bottom});
  }
  return <nav className="nav" onMouseOver={handle_submenu}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="stripe" />
        <button className="btn toggle-btn" onClick={open_sidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn" onMouseOver={display_submenu}>
            products
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={display_submenu}>
            developers
          </button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={display_submenu}>
            company
          </button>
        </li>
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </div>
  </nav>
  
}

export default Navbar
