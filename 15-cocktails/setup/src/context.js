import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading,set_loading] = useState(true);
  const [search_term,set_search_term] = useState('a');
  const [cocktails,set_cocktails] = useState([]);

  const fetch_drinks = useCallback(async () => {
  try{
    const response = await fetch(`${url}${search_term}`);
    if(response.ok){  
      const data = await response.json();
      const {drinks} = data;
      if(drinks){
        const new_drinks = drinks.map(drink => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass} = drink;
          return {
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            info:strAlcoholic,
            glass:strGlass};
        });
        set_cocktails(new_drinks);
      }
      else{
        set_cocktails([]);
      }
      set_loading(false);
    }
    else{
      throw new Error(response.statusText);
    }
  }
  catch (error){
    console.log(error);
  }
},[search_term]);
  useEffect(() => {
    fetch_drinks();  
  },[search_term,fetch_drinks]);
  return <AppContext.Provider value={{
    loading,
    set_search_term,
    cocktails,
    fetch_drinks
  }}>
      {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
