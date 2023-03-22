import { useState, createContext, useEffect } from 'react'
import { Auth } from "aws-amplify"

const RestaurantContext = createContext({})

const RestaurantContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [restaurant, setRestaurant] = useState()

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true})
    }, [])

  return (
    <>
        <RestaurantContext.Provider value={{}}>
            {children}
        </RestaurantContext.Provider>
    </>
  )
}

export default RestaurantContextProvider
