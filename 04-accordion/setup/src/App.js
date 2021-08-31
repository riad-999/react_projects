import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <div className="container">
      <h3>
        questions and asnwers about logins
      </h3>
      <section className="info">
        {data.map(item => {
          return <SingleQuestion key={item.id} {...item} />;
        })}
      </section>
    </div>
  </main>;
}

export default App;
