import orders from "../data/orders.json"
import { Card, Table, Tag } from "antd"

const Orders = () => {
    const tableColumns = [
        {
          title: "Order ID"  ,
          dataIndex: "orderID",
          key: "orderID"
        },
    ]

    return (
     <>
        <Card title={"Orders"} style={{margin: 20}}>
            <Table 
             dataSource={orders}
             columns={tableColumns}   
            />
        </Card>
     </>
    )
}

export default Orders