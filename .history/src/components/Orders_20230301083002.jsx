import { useState, useEffect } from "react"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"

import { DataStore } from "aws-amplify"
import { Order, OrderStatus } from "../models" 

const Orders = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        DataStore.query(Order).then(setOrders)
    }, [])

    const renderOrderStatus = (orderStatus) => {
        let color = "grey";

        if (orderStatus === OrderStatus.NEW) {
            color="green"
        }
        if (orderStatus === OrderStatus.COOKING) {
            color="yellow"
        }
        if (orderStatus === OrderStatus.READY_FOR_PICKUP) {
            color="red"
        }
        return <Tag color={color}>{orderStatus}</Tag>
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
            render: (price) => `$ ${price} `
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