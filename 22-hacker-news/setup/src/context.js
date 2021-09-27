import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  loading:true,
  hits:[],
  query:"react",
  nbPages:0,
  page:0
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialState);

  const fetchStories = async (url) => {
    console.log("fetched");
    dispatch({type: SET_LOADING});
    try{
      const response = await fetch(url);
      const data = await response.json();
      dispatch({type:SET_STORIES,payload:{
        hits:data.hits,
        nbPages:data.nbPages
      }});
    }
    catch(error) {
      console.log(error);
    }
  }
  const handleSearch = (query) => {
    dispatch({type:HANDLE_SEARCH,payload:query});
  }
  const handlePage = (action) => {
    dispatch({type:HANDLE_PAGE,payload:action});
  }
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  },[state.query,state.page]);
  return <AppContext.Provider value={{...state,dispatch,handleSearch,handlePage}}>
    {children}
  </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
