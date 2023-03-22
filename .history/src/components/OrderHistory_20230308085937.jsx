// edit on plane


// import ordersHistory from "../data/orders-history.json"
import { useState, useEffect } from "react"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"
import { DataStore } from "aws-amplify"
import { Order, OrderStatus } from "../models"
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
              .status("eq", "DECLINED_BY_RESTAURANT") 
          )
      ).then(setOrders)
  }, [restaurant])


  const renderOrderStatus = (orderStatus) => {
    const statusToColor = {
        [OrderStatus.PICKED_UP]: "yellow",
        [OrderStatus.COMPLETED]: "green",
        [OrderStatus.DECLINED_BY_RESTAURANT]: "red",
    }

    return <Tag color={statusToColor[orderStatus]}>{orderStatus}</Tag>
}

const tableColumns = [
    {
      title: "Order ID"  ,
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Created At" ,
      dataIndex: "createdAt",
      key: "createdAt"
    },
    {
        title: "Price" ,
        dataIndex: "total",
        key: "total",
        render: (price) => `$ ${price?.toFixed(2) ?? 0} `
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
             dataSource={orders}
             columns={tableColumns}  
             rowKey="id"
             onRow={(orderItem) => ({
              onClick: () => navigate(`/order/${orderItem.id}`)
             })}
            />
        </Card>
    </>
  )
}

export default OrderHistory







