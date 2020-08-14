import React, { useReducer, createContext } from 'react'
import reducer from '../reducer/MenuReducer'


export const MenuContext = createContext()


export const initialState = {
    genresList: {
        genres: undefined
    }
}

function StoreProvider({ children }) {
    const value = useReducer(reducer, initialState)
    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}

export default StoreProvider