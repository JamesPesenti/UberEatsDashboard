import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

const SideMenu = () => {
    const navigate = useNavigate()

    const onClick = (menuItem) => {
        navigate(menuItem.key)
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
        <Menu 
            items={menuItems} 
            onClick={onClick}
            style={{backgroundColor: "transparent"}}
        />
    ) 
}

export default SideMenu