import React, { useEffect, useReducer, createContext } from 'react'
import { reducer } from '../reducer/MenuReducer'
import { fetchingGenre } from '../actions/fetching'


export const MenuContext = createContext()


export const initialState = [{
    id: 0,
    name: 'Popular'
}]

function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        fetchingGenre(initialState, dispatch)
    }, [])
    return (
        <MenuContext.Provider value={state}>
            {children}
        </MenuContext.Provider>
    )
}

export default StoreProvider