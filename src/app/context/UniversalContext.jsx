'use client'

import { createContext, useContext, useState } from 'react'

const MyContext = createContext({})

export const ContextProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('')

  return (
    <MyContext.Provider
      value={{
        currentRoute,
        setCurrentRoute
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const UniversalContext = () => useContext(MyContext)
