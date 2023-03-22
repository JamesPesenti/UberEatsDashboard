import orders from "../data/orders.json"
import { Card, Table, Tag } from "antd"
import { useNavigate } from "react-router-dom"

const OrderHistory = () => {

    const navigate = useNavigate()



    const tableColumns = [
        {
          title: "Order ID"  ,
          dataIndex: "orderID",
          key: "orderID"
        },
        {
          title: "Delivery Address" ,
          dataIndex: "deliveryAddress",
          key: "deliveryAddress"
        },
        {
            title: "Price" ,
            dataIndex: "price",
            key: "price",
            render: (price) => `$ ${price}`
        },
        {
            title: "Status" ,
            dataIndex: "status",
            key: "status",
            render: (status) =>  <Tag color={status === "Delivered" ? "green" : "red"}>{status}</Tag>
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







