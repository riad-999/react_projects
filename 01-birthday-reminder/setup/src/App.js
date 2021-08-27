import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people,set_people] = useState(data);
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people}/>
      <button type="button" onClick={() => set_people([])}>
        clear all
      </button>
    </section>
  </main>
}

export default App;
