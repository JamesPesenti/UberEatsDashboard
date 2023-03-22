import DetailedOrder from "./DetailedOrder";
import Orders from "./Orders";
import OrderHistory from ".components/OrderHistory";
import RestaurantMenu from ".components/RestaurantMenu";
import CreateMenuItem from ".components/CreateMenuItem";
import { Routes, Route } from "react-router-dom"

const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Orders />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="order/:id" element={<DetailedOrder />} />
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
          </Routes>
    </>
  )
}

export default AppRoutes