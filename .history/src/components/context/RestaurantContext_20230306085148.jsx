import { useState, createContext, useEffect } from 'react'
import { Auth } from "aws-amplify"

const RestaurantContext = createContext({})

const RestaurantContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [restaurant, setRestaurant] = useState()
    const sub = user?.attributes?.sub

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser)
    }, [])
    console.log(sub) 

    useEffect(() => {
      
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
