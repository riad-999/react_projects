import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count,set_count] = useState(0);
  const [text,set_text] = useState([]);

  function handle_change(event){
    set_count(event.currentTarget.value);
  }
  function handle_submit(event){
    event.preventDefault();

    if(count < 0) set_count(0);
    if(count > 8) set_count(8);
    set_text(data.slice(0,parseInt(count)));
  }
  return (
    <section className="section-center">
      <h3>tiered of boring lorem ipsum ?</h3>
      <form className="lorem-form" onSubmit={handle_submit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" id="amount" name="amount"
         value={count} onChange={handle_change}/>
         <button type="submit" className="btn">
           generate
         </button>
      </form>
      <article className="lorem-text">
        {text.map(parag => {
          return <p>{parag}</p>;
        })}
      </article>
    </section>
    );
}

export default App;
