import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {is_submenu_open,location,content:{page,links}} = useGlobalContext();
  const container = useRef(null);
  const [columns,set_columns] = useState('col-2');
  useEffect(()=> {
    const {center,bottom} = location;
    container.current.style.left = `${center}px`;
    container.current.style.top = `${bottom}px`;
    set_columns('col-2');
    if(links.length === 3) set_columns("col-3");
    if(links.length > 3) set_columns("col-4");
  },[location,links]);
  return <aside 
  className={is_submenu_open ? 'submenu show' : 'submenu'} ref={container}>
    <h4>{page}</h4>
    <div className={`submenu-center ${columns}`}>
      {links.map((link,index) => {
        const {label,icon,url} = link;
        return <a href={url} key={index}>
            {icon}
            {label}
          </a>
      })}
    </div>

  </aside>
}

export default Submenu
