import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    //states
    const [is_sidebar_open,set_is_sidebar_open] = useState(false);
    const [is_submenu_open,set_is_submenu_open] = useState(false);
    const [location,set_location] = useState({});
    const [content,set_content] = useState({page:'',links:[]});
    // handlers
    const open_sidebar = () => {
        set_is_sidebar_open(true);
    }
    const close_sidebar = () => {
        set_is_sidebar_open(false);
    }
    const open_submenu = (text,coordinates) => {
        set_location(coordinates);
        const links = sublinks.find(link => link.page === text);
        set_content(links);
        set_is_submenu_open(true);
    }
    const close_submenu = () => {
        set_is_submenu_open(false);
    }
    return <AppContext.Provider value={{
        is_submenu_open,
        is_sidebar_open,
        location,
        content,
        open_submenu,
        close_submenu,
        open_sidebar,
        close_sidebar
    }}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppProvider} ;