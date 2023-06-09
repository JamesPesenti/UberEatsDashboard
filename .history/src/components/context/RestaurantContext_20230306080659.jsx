import { useState, createContext } from 'react'


const RestaurantContext = createContext({})

const RestaurantContextProvider = ({children}) => {

  return (
    <>
        <RestaurantContext.Provider value={{}}>
            {children}
        </RestaurantContext.Provider>
    </>
  )
}

export default RestaurantContextProvider
