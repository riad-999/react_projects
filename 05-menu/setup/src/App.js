import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu_items,set_menu_items] = useState(items);
  function filter(category){
    if(category === "all"){
      set_menu_items(items);
      return;
    }
    const new_items = items.filter(item => {
      return item.category === category;
    });
    set_menu_items(new_items);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories items={items} filter={filter}/>
        <Menu items={menu_items}/>
      </section>
    </main>
  );
}

export default App;
