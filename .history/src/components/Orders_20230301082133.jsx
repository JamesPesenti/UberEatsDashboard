import { useState, useEffect } from "react"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"

import { DataStore } from "aws-amplify"
import { Order } from "../models" 

const Orders = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        DataStore.query(Order).then(setOrders)
    }, [])

    const renderOrderStatus = (orderStatus) => {
        if (orderStatus === "Accepted") {
            return (
                <Tag color={"green"}>
                    {orderStatus}
                </Tag>
            )
        }
        if (orderStatus === "Pending") {
            return (
                <Tag color={"yellow"}>
                    {orderStatus}
                </Tag>
            )
        }
        if (orderStatus === "Declined") {
            return (
                <Tag color={"red"}>
                    {orderStatus}
                </Tag>
            )
        }
    }

    const tableColumns = [
        {
          title: "Order ID"  ,
          dataIndex: "id",
          key: "id"
        },
        {
          title: "" ,
          dataIndex: "deliveryAddress",
          key: "deliveryAddress"
        },
        {
            title: "Price" ,
            dataIndex: "total",
            key: "total",
            render: (price) => `$ ${price.toFixed(2)}`
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
        <Card title={"Orders"} style={{margin: 20}}>
            <Table 
             dataSource={orders}
             columns={tableColumns}  
             rowKey="orderID"
             onRow={(orderItem) => ({
                onClick: () => navigate(`order/${orderItem.orderID}`)
             })}
            />
        </Card>
     </>
    )
}

export default Orders