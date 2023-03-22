import { Menu } from "antd"

const SideMenu = () => {
    const menuItems = [
        {
            key: "/",
            label: "Orders"
        },
    ]

    return (
        <Menu style={{backgroundColor: "black"}} items={menuItems} />
    ) 
}

export default SideMenu