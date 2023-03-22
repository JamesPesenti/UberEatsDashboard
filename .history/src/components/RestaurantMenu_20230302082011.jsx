// Edit on plane

// import dishes from "../data/dishes.json"
import { Card, Table, Button } from "antd"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import { DataStore } from "aws-amplify"
import { Dish } from "../models"


const RestaurantMenu = () => {

    const [dishes, setDishes] = useState([]) 

    useEffect(() => {
      DataStore.query(Dish).then(setDishes)
    }, [])


    const tableColumns = [
        {
            title: "Menu Item",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Price",
            dataIndex: "total",
            key: "total",
            render: (price) => `$ ${price}`
        },
        {
            title: "Action",
            key: "action",
            render: () => <Button danger>remove</Button>
        },
    ]

    const renderNewItemButton = () => (
          <Link to={"create"}>
              <Button type="primary">New Item</Button>
          </Link>
    )

  return (
    <>
      <Card 
        title={"Menu"} 
        style={{margin: 20}}
        extra={renderNewItemButton()}
      >
        <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
      </Card>
    </>
  )
}

export default RestaurantMenu
