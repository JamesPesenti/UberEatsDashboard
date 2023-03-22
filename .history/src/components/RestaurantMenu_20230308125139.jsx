import { Card, Table, Button, Popconfirm } from "antd"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

import { DataStore } from "aws-amplify"
import { Dish } from "../models"
import { useRestaurantContext } from "./context/RestaurantContext"


const RestaurantMenu = () => {

    const { restaurant } = useRestaurantContext
    const [dishes, setDishes] = useState([]) 

    useEffect(() => {
      if (restaurant?.id) {
        DataStore.query(Dish, c => c.restaurantID("eq", restaurant.id)).then(
          setDishes
          )
      }
    }, [restaurant?.id])


    const deleteDish = () => {
      console.log("delete")
    }


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
            render: (_, item) => ( 
              <Popconfirm 
                placement="topLeft" 
                title={"Are you sure?"} 
                onConfirm={() => deleteDish(item)} 
                okText="Yes" 
                cancelText="No" 
              >
                <Button danger>remove</Button>
              </Popconfirm>
          )
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
