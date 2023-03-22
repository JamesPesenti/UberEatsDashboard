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
    ]

    return (
        <Menu style={{backgroundColor: "black"}} items={menuItems} />
    ) 
}

export default SideMenu