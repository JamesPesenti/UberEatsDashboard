// edit on plane


// import ordersHistory from "../data/orders-history.json"
import { useState, useEffect } from "react"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"

import { DataStore } from "aws-amplify"
import { OrderHistory, OrderStatus } from "../models"

const OrderHistory = () => {
    const navigate = useNavigate()

    const [ordersHistory, setOrdersHistory] = useState([])

    useEffect(() => {
      DataStore.query(OrderHistory).then(setOrdersHistory)
    }, [])

    const renderOrderStatus = (orderStatus) => {
      const statusToColor = {
        [OrderStatus.NEW]: "green",
        [OrderStatus.COOKING]: "yellow",
        [OrderStatus.READY_FOR_PICKUP]: "red"
      }

      return <Tag color={statusToColor[order]}>{statusToColor} </Tag>
    }


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







