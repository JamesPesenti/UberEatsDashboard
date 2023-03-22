import { Card, Table, Button } from "antd"
import dishes from "../data/dishes.json"


const RestaurantMenu = () => {

    const tableColumns = [
        {
            title: "Menu Item",
            dataIndex: "name",
            key: "name",

        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            render: (price) => `$ ${price}`
        },
        {
            title: "Action",
            key: "action",
            render: () => <Button danger>remove</Button>
        },
    ]

    const renderNewItemButton = () => (
            <span></span> 
    )

  return (
    <>
      <Card title={"Menu"}y style={{margin: 20}}>
        <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
      </Card>
    </>
  )
}

export default RestaurantMenu
