import React, { useContext } from 'react'
import { createContext } from 'react'

const MainContext = createContext({});
const MainContextProvider  = () => {
  return (
    <MainContextProvider></MainContextProvider>
  )
}

export default MainContextProvider;
export const useMainContext = () => useContext(MainContext)