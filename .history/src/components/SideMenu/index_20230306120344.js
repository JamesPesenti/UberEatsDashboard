// edit on plane

import { useEffect, useState} from "react"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"
import { Auth, DataStore } from "aws-amplify"
import { useRestaurantContext } from "../context/RestaurantContext"

const SideMenu = () => {

    const { restaurant } = useRestaurantContext()
    const [menu, setMenu] =  useState([])

    useEffect(() => {
        DataStore.query().then()
    }, [])

    const navigate = useNavigate()

    const onClick = async (menuItem) => {
        if (menuItem.key === "signOut") {
            await Auth.signOut()
            window.location.reload()
        } else {
            navigate(menuItem.key)
        }
    }

    const menuItems = [
        {
            key: "/",
            label: "Orders"
        },
        {
            key: "menu",
            label: "Menu"
        },
        {
            key: "order-history",
            label: "Order History"
        },
        {
            key: "settings",
            label: "Settings"
        },
        {
            key: "signOut",
            label: "Sign Out",
            danger: "true"
        },
    ]

    const onMenuItemClicked = (menuItem) => {
        navigate(menuItem.key)
    }

    return (
        <>
        <h2>{restaurant.name}</h2>
        <Menu 
            items={menuItems} 
            onClick={onClick}
            style={{backgroundColor: "transparent"}}
        />
        </>
    ) 
}

export default SideMenu