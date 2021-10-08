import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=${process.env.REACT_APP_API_ACCESS_KEY}`;
function App() {
  //states 
  const [loading,_setLoading] = useState(true);
  const [photos,setPhotos] = useState([]);
  const [page,setPage] = useState(1);
  const [query,setQuery] = useState('');
  //refs 
  const loadingRef = React.useRef(loading);
  const setLoading = data => {
    loadingRef.current = data;
    _setLoading(data);
  }
  const fetchImages = async () => {
    setLoading(true);
    const pageUrl = `&page=${page}`;
    const queryUrl = `&query=${query}`;
    const url = !query ? `${mainUrl}${clientID}${pageUrl}` :
    `${searchUrl}${clientID}${pageUrl}${queryUrl}`;
    try{
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPhotos(oldPhotos => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else if(page === 1){
          return data;
        }
        else{
          return [...oldPhotos,...data];
        }
      });     
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  //effects 
  useEffect(()=> {
    fetchImages();
    // eslint-disable-next-line
  },[page]);

  useEffect(() => {
    console.log('scroll avent added');
    const scrollEvent = window.addEventListener("scroll",() => {
      if(!loadingRef.current && (window.innerHeight + window.scrollY >= 
        document.body.scrollHeight - 100)){
          setPage(page => page + 1);
        }
    });
    return () => window.removeEventListener("scroll",scrollEvent) ;
    // eslint-disable-next-line
  },[]);
  //handlers
  const handleSubmit = (event) => {
    console.log("submited");
    event.preventDefault();
    setPage(1);
    fetchImages();
  }
  return <main>
    <section className="search">
      <form className="search-form">
        <input className="form-input" type="text"
        placeholder="Search" value={query}
        onChange={event => setQuery(event.currentTarget.value)} />
        <button type="submit" className="submit-btn"
        onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>
    </section>
    <section className="photos">
      <div className="photos-center">
        {photos.map(photo => {
          return <Photo key={photo.id} {...photo} />
        })}
      </div>
      {loading ? <h2 className="loading">Loading...</h2> : null}
    </section>
  </main>
}

export default App
