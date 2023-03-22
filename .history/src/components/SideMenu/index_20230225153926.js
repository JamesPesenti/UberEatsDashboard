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

    const onMenuItemClicked = (menuItem) => {
        console.log(menuItem)
    }

    return (
        <Menu 
            items={menuItems} 
            onClick={onMenuItemClicked}
            style={{backgroundColor: "transparent"}}
        />
    ) 
}

export default SideMenu