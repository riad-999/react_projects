import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading,set_loading] = useState(true);
  const [tours,set_tours] = useState([]);
  function remove_tour(id){
    const new_tours = tours.filter((tour) => tour.id !== id);
    set_tours(new_tours);
  }
  async function get_tours(){
    set_loading(true);
    const response = await fetch(url);
    if(response.status >= 200 && response.status <= 299){
      const tours = await response.json();
      console.log(tours);
      set_loading(false);
      set_tours(tours);
    }
    else{
      throw new Error(response.statusText);
    }
  }
  useEffect(() => { 
    get_tours().catch((err)=>console.log(err));
  },[]);
  if(loading){
    return <main>
        <Loading/>
      </main>;
  }
  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button type="button" className="btn" onClick={get_tours}>
          Refresh
        </button>
      </div>
    </main>
  }
  return <main>
          <Tours tours = {tours} remove_tour = {remove_tour}/>
        </main>
}

export default App
