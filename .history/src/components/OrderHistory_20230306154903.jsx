// edit on plane


// import ordersHistory from "../data/orders-history.json"
import { useState, useEffect } from "react"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"
import { DataStore } from "aws-amplify"
import { Order } from "../models"
import { useRestaurantContext } from "./context/RestaurantContext"

const OrderHistory = () => {
    const navigate = useNavigate()

    const [orders, setOrders] = useState([])
    const { restaurant } = useRestaurantContext()

    useEffect(() => {
      if (!restaurant) {
          return;
      }
      DataStore.query(Order, (order) => 
          order.orderRestaurantId("eq", restaurant.id)
          .or((orderStatus) => 
              orderStatus
              .status("eq", "PICKED_UP")
              .status("eq", "COMPLETED")
              .status("eq", "ACCEPTED") 
              .status("eq", "DECLINED_BY_RESTAURANT") 
          )
      ).then(setOrders)
  }, [restaurant])


    const tableColumns = [
        {
          title: "Order ID",
          dataIndex: "id",
          key: "id"
        },
        {
          title: "Delivery Address" ,
          dataIndex: "deliveryAddress",
          key: "deliveryAddress"
        },
        {
            title: "Price" ,
            dataIndex: "total",
            key: "total",
            render: (price) => `$ ${price}`
        },
        {
            title: "Status" ,
            dataIndex: "status",
            key: "status",
            render: renderOrderStatus
        },
    ]


  return (
    <>
       <Card title={"Order History"} style={{margin: 20}}>
            <Table 
             dataSource={ordersHistory}
             columns={tableColumns}  
             rowKey="orderID"
            />
        </Card>
    </>
  )
}

export default OrderHistory







