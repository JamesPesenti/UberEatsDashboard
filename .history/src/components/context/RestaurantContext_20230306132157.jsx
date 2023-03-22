import { useState, createContext, useEffect, useContext } from 'react'
import { Auth, DataStore } from "aws-amplify"
import { Restaurant } from "../../models/index"

const RestaurantContext = createContext({})

const RestaurantContextProvider = ({children}) => {
    const [user, setUser] = useState()
    const [restaurant, setRestaurant] = useState()
    const sub = user?.attributes?.sub

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setUser)
    }, [])

    useEffect(() => {
      if (!sub) {
        return;
      }
      DataStore.query(Restaurant, (r) => r.adminSub("eq", sub)).then((restaurants) => setRestaurant(restaurants))
    }, [sub])

  return (
    <>
        <RestaurantContext.Provider value={{restaurant, sub}}>
            {children}
        </RestaurantContext.Provider>
    </>
  )
}

export default RestaurantContextProvider

export const useRestaurantContext = () => useContext(RestaurantContext)
