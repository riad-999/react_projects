import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color,set_color] = useState('');
  const [error,set_error] = useState(false);
  const [list,set_list] = useState(new Values("#f15025").all(10));

  function handle_submit(event){
    event.preventDefault();
    try{
      const colors= new Values(color).all(10);
      console.log(colors);
      set_list(colors);
      set_error(false);
    } catch(error){
      set_error(true);
      console.log(error);
    }
  }

  return <>
    <section className="container">
      <h3>color generator</h3>
      <form onSubmit={handle_submit}>
        <input type="text" value={color} 
        onChange={event => set_color(event.currentTarget.value)}
        placeholder="#f15025" className={error ? `error` : null}/>
        <button type="submit" className="btn">submit</button>
      </form>
    </section>
    <section className="colors">
      {list.map((color,index) => {
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>;
      })}
    </section>
  </>
}

export default App
