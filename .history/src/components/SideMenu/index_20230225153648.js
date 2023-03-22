import { Menu } from "antd"

const SideMenu = () => {
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
    ]

    return (
        <Menu style={{backgroundColor: "transparent"}} items={menuItems} />
    ) 
}

export default SideMenu