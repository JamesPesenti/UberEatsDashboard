import { Card, Table } from "antd"
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
    ]
  return (
    <>
      <Card title={"Menu"}y style={{margin: 20}}>
        <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
      </Card>
    </>
  )
}

export default RestaurantMenu
