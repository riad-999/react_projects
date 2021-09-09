import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobal } from './context';


const Home = () => {
  const {show_modal,show_sidebar} = useGlobal();
  return (
    <main>
      <button className="sidebar-toggle" onClick={show_sidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={show_modal}>
        show modal
      </button>
    </main>
  );
}

export default Home
