import { useState, useEffect } from "react"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"

import { DataStore } from "aws-amplify"
import { Order, OrderStatus } from "../models" 
import { useRestaurantContext } from "./context/RestaurantContext"

const Orders = () => {
    const [orders, setOrders] = useState([])
    const { restaurant } = useRestaurantContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (!restaurant) {
            return;
        }
        DataStore.query(Order, (order) => 
            order.orderRestaurantId("eq", restaurant.id)).then(setOrders)
    }, [restaurant])

    const renderOrderStatus = (orderStatus) => {
        const statusToColor = {
            [OrderStatus.NEW]: "green",
            [OrderStatus.COOKING]: "yellow",
            [OrderStatus.READY_FOR_PICKUP]: "red"
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
          title: "Delivery Address" ,
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