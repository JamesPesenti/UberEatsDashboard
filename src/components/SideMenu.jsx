import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useRestaurantContext } from "../context/RestaurantContext";

const SideMenu = () => {
  const navigate = useNavigate();
  const { restaurant } = useRestaurantContext();

  const onClick = async (menuItem) => {
    if (menuItem.key === "signOut") {
      await Auth.signOut();

      window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };

  const mainMenuItems = [
    {
      key: "/",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Menu",
    },
    {
      key: "order-history",
      label: "Order History",
    },
  ];

  const menuItems = [
    ...(restaurant ? mainMenuItems : []),
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "signOut",
      label: "Sign out",
      danger: "true",
    },
  ];

  return (
    <>
      {restaurant && <h1 style={{margin: 20}}>{restaurant?.name}</h1>}
      <Menu items={menuItems} onClick={onClick} />
    </>
  );
};

export default SideMenu;
