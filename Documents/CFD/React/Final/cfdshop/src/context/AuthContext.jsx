import React, { createContext } from 'react'
import { useContext } from 'react'

const AuthContext = createContext({})
const AuthContextProvider = () => {
  return (
    <AuthContextProvider></AuthContextProvider>
  )
}

export default AuthContextProvider
export const useAuthContext = () => useContext(AuthContext)