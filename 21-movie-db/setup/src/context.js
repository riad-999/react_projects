import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState({show:false,msg:''});
  const [movies,setMovies] = useState([]);
  const [query,setQuery] = useState('loki');

  const fetchMovies = async (url) => {
    setLoading(true);
    try{
      const response = await fetch(url);
      if(response.ok){
        const data = await response.json();
        if(data.Response === 'True'){
          setMovies(data.Search);
          setError({show:false,msg:''});
        }
        else{
          setError({show:true,msg:data.Error});
        }
        setLoading(false);
      }
      else{
        throw new Error(response.statusText);
      }
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`);
  },[query]);
  return <AppContext.Provider value={{
    loading,error,movies,query,setQuery
  }}>
      {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }