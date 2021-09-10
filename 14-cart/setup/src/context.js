import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const default_state = {
    cart:[],
    loading:true,
    amount: 0,
    total: 0
  }
  const [state, dispatch] = useReducer(reducer,default_state);
  const clear_cart = () => {
  dispatch({type:'CLEAR_CART'});
  }
  const remove = (id) => {
    dispatch({type:'REMOVE', payload: id});
  }
  const increase = (id) => {
    dispatch({type:'INCREASE', payload:id});
  }
  const decrease = (id) => {
    dispatch({type:'DECREASE', payload:id});
  }
  const get_cart = async () => {
    dispatch({type:'LOADING'});
    const response = await fetch(url);
    if(response.ok){
    const cart = await response.json();
    dispatch({type:'DISPLAY_CART', payload: cart});
    dispatch("random");
    }
    else{
      throw new Error(response.statusText);
    }
  }
  useEffect(() => {
    get_cart().catch(err => console.log(err));
  },[]);
  useEffect(() => {
    dispatch({type:"SET_TOTAL_&_AMOUNT"});
  },[state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clear_cart,
        remove,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
