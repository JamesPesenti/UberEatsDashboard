import DetailedOrder from "./DetailedOrder";
import Orders from "./Orders";
import OrderHistory from "./OrderHistory";
import Settings from "./Settings"
import RestaurantMenu from "./RestaurantMenu";
import CreateMenuItem from "./CreateMenuItem";
import { Routes, Route } from "react-router-dom"

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="order/:id" element={<DetailedOrder />} />
            <Route path="settings" element={<Settings />} />
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
          </Routes>
    </>
  )
}

export default AppRoutes