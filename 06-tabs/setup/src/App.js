import { buildQueries } from '@testing-library/dom';
import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading,set_loading] = useState(true);
  const [tabs,set_tabs] = useState([]);
  const [index,set_index] = useState(0);
  async function get_tabs(){
    const response = await fetch(url);
    if(response.ok){
    const tabs = await response.json();
    set_tabs(tabs);
    set_loading(false);
    }
    else{
      throw new Error(response.statusText);
    }
  }
  useEffect(() => {
    get_tabs().catch(err => console.log(err));
  },[]);
  if(loading) {
    return <section className="section loading">
      <h1>loading...</h1>
    </section>
  }
  const {company,dates,duties,title} = tabs[index];
  return (
    <section className="section">
        <div className="title">
          <h2>expierence</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <article className="jobs-center">
            <div className="btn-container">
              {tabs.map((item,Index) => {
                return <button key={item.id} className=
                {`job-btn ${index === Index ? 'active-btn' : null}`} onClick={
                  () => set_index(Index)
                }>
                    {item.company}
                  </button>
              })}
            </div>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">
              {dates}
            </p>
            {duties.map((duty,index) => {
              return <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon">
                  </FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
            })}
          </article>
        </div>
    </section>
  );
}

export default App
