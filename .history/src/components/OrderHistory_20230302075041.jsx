// import ordersHistory from "../data/orders-history.json"
import { useState, useEffect } from "react"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"

import { DataStore } from "aws-amplify"
import { OrderHistory } from "../models"

const OrderHistory = () => {
    const navigate = useNavigate()

    const [orderHistory, setOrderHistory] = useState([])
    
    useEffect(() => {
      DataStore.query(OrderHistory).then(setOrderHistory)
    }, [])

    const renderOrderStatus = () => {
      const statusToColor = {
        [OrderStatus.NEW]: "green",
        [OrderStatus.COOKING]: "yellow",
        [OrderStatus.READY_FOR_PICKUP]: "red"
      }
      return render: (status) =>  <Tag color={status === "Delivered" ? "green" : "red"}>{status}</Tag>
    }


    const tableColumns = [
        {
          title: "Order ID"  ,
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
             dataSource={orderHistory}
             columns={tableColumns}  
             rowKey="orderID"
            />
        </Card>
    </>
  )
}

export default OrderHistory







