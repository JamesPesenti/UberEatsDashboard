import { Menu } from "antd"



const SideMenu = () => {
    const menuItems = [
        {
            key: "/",
            label: "Orders"
        },
    ]

    return (
        <Menu items={menuItems} />
    ) 
}

export default SideMenu