import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {close_sidebar,is_sidebar_open} = useGlobalContext();
  return <aside className={`
  ${is_sidebar_open ? 'sidebar-wrapper show' : 'sidebar-wrapper' }`}>
    <div className="sidebar">
      <button className="close-btn" onClick={close_sidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-links">
        {sublinks.map((item,index)  => {
          const {links,page} = item;
          return (
          <article key={index}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link,index) => {
                const {url,icon,label} = link;
                return (
                  <a key={index} href={url}>
                    {icon}
                    {label}
                  </a>
                );
              })}
            </div>
          </article>
        );})}
      </div>
    </div>
  </aside>
}

export default Sidebar
