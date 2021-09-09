import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {  
    const [is_modal,set_is_modal] = useState(false);
    const [is_sidebar,set_is_sidebar] = useState(false);

    const show_modal = () => {
        set_is_modal(true);
    }
    const close_modal = () => {
        set_is_modal(false);
    }
    const show_sidebar = () => {
        set_is_sidebar(true);
    }
    const close_sidebar = () => {
        set_is_sidebar(false);
    }
    return(  
    <AppContext.Provider value={{is_sidebar,is_modal,show_sidebar,show_modal,close_sidebar,close_modal}}>
        {children}
    </AppContext.Provider>);
}
export const useGlobal = () => {
    return useContext(AppContext);
}
export {AppProvider,AppContext} ;
