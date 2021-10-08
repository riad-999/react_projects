import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
}
function App() {
  const [theme,setTheme] = useState(getStorageTheme());

  const handleSwitch = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
    }
    else {
      setTheme('light-theme');
    }
  }
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme',theme);
  },[theme]);
  return <main>
    <div className="nav-center">
      <nav>
        <h1>overreacted</h1>
        <button className="btn" onClick={handleSwitch}>
          toggle
        </button>
      </nav>
      <section className="articles">
        {data.map(item => {
          return <Article key={item.id} {...item} />
        })}
      </section>
    </div>
  </main>
}

export default App
