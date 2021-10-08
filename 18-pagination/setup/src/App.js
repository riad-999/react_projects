import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const {loading,data} = useFetch();
  const [page,setPage] = useState(0);
  const [followers,setFollowers] = useState([]);
   
  const handleClick = (index) => {
    setPage(index);
  };
  const handleNext = () => {
    if(page === data.length - 1){
      setPage(0);
      return;
    }
    setPage(page + 1);
  };
  const handlePrev = () => {
    if(page === 0){
      setPage(data.length - 1);
      return;
    }
    setPage(page - 1);
  }
  useEffect(() => {
    if(loading)
      return;
    setFollowers(data[page]);
  },[loading,page]);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map(follower => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
        {!loading ? 
        <div className="btn-container">
          <button className="prev-btn" type="button" onClick={() => handlePrev()}>prev</button>
          {data.map((_,index) => {
            return <button type="button" key={index}
            className={page === index ? 'page-btn active-btn' : 'page-btn'}
            onClick={() => handleClick(index)}>{index + 1}</button> ;
          })}
          <button className="next-btn" type="button" onClick={() => handleNext()}>next</button>
        </div>
        : null }
      </section>
    </main>
  );
}

export default App
