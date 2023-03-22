import DetailedOrder from "../src/components/DetailedOrder";
import Orders from "../src/components/Orders";
import OrderHistory from "../src/components/OrderHistory";
import RestaurantMenu from "../src/components/RestaurantMenu";
import CreateMenuItem from "../src/components/CreateMenuItem";
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