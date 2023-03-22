import { useState, useEffect} from 'react'
import { createContext } from "react-context"

const RestaurantContextProvider = () => {
  return (
    <>
        <RestaurantContextProvider>
            {children}
        </RestaurantContextProvider>
    </>
  )
}

export default RestaurantContextProvider
