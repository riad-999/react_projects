import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  //refs
  const links_ref = useRef(null);
  const links_container_ref = useRef(null);
  //states
  const [show_links,set_show_links] = useState(false);
  // const [height,set_height] = useState(links_ref.current.getBoundingClientRect().height);
  //effects 
  // useEffect(()=>{
  //   window.addEventListener("resize",()=>{
  //     set_height(links_ref.current.getBoundingClientRect().height);
  //   });
  // },[]);

  useEffect(()=> {
    const height = links_ref.current.getBoundingClientRect().height;
    if(show_links){
      links_container_ref.current.style.height = `${height}px`;
    }
    else{
      links_container_ref.current.style.height = `0`;
    }
  },[show_links]);

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt='logo'></img>
        <button className="nav-toggle" onClick={() => set_show_links(!show_links)}>
          <FaBars />
        </button>
      </div>
      <div className="links-container"
      ref={links_container_ref}>
        <ul className="links" ref={links_ref}>
          {links.map(link => {
            const {id,url,text} = link;
            return <li key={id}>
                <a href={url}>{text}</a>
              </li>
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map(item => {
          const {id,url,icon} = item;
          return <li key={id}>
              <a href={url}>{icon}</a>
            </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
