import DetailedOrder from "../../screens/DetailedOrder";
import Orders from "../../screens/Orders";
import RestaurantMenu from "../../screens/RestaurantMenu";
import CreateMenuItem from "../../screens/CreateMenuItem";
import OrderHistory from "../../screens/OrderHistory";
import Settings from "../../screens/Settings";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
      <Route path="menu" element={<RestaurantMenu />} />
      <Route path="menu/create" element={<CreateMenuItem />} />
      <Route path="order-history" element={<OrderHistory />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
