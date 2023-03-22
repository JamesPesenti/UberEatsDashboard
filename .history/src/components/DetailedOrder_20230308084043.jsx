// Edit on plane


// import dishes from "../data/dishes.json"
import { Card, Descriptions, Divider, List, Button, Spin } from "antd"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { DataStore } from "aws-amplify"
import { Order, User, OrderDish } from "../models"


const statusToColor = {
  [OrderStatus.NEW]: "green",
  [OrderStatus.COOKING]: "yellow",
  [OrderStatus.READY_FOR_PICKUP]: "red",
  [OrderStatus.ACCEPTED]: "purple",
}


const DetailedOrder = () => {

   const {id} = useParams()
   
   const [order, setOrder] = useState(null)
   const [customer, setCustomer] = useState(null)
   const [dishes, setDishes] = useState([])

   useEffect(() => {
      DataStore.query(Order, id).then(setOrder)
   }, [id])

   useEffect(() => {
    if (order?.userId) {
      DataStore.query(User, order.userID).then(setCustomer)
    }
   }, [order?.userID])


   useEffect(() => {
    if (order?.id) {
      return;
    }
    DataStore.query(OrderDish, c => c.orderID("eq", order.id)).then(setDishes)
   }, [order?.id])


  //  Order Buttons
   const acceptOrder = async () => {
    updateOrderStatus(OrderStatus.COOKING)
   }

   const declineOrder = async () => {
    updateOrderStatus(OrderStatus.DECLINED_BY_RESTAURANT)
   }

   const readyForPickup = async () => {
    updateOrderStatus(OrderStatus.READY_FOR_PICKUP)
   }

   const updateOrderStatus = async (newStatus) => {
    const updatedOrder = await DataStore.save(Order.copyOf(order, updated => {
      updated.status = newStatus
    }))
    setOrder(updatedOrder)
   }
 

   if (!order) {
    return <Spin size="large"/>
   }

    return (
        <>
        <Card title={`Order ${id}`} style={{ margin: 20, marginVertical: 50}}>
         <Tag color={statusToColor[order?.status]}>{order?.status}</Tag>
          <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
            <Descriptions.Item label="Customer">{customer?.name}</Descriptions.Item>
            <Descriptions.Item label="Address">{customer?.address}</Descriptions.Item>
          </Descriptions>
          <Divider />
          <List 
            dataSource={dishes} 
            renderItem={(dishItem) => (
              <List.Item>
                <div style={{fontWeight: "bold"}}>{dishItem.Dish.name} x{dishItem.quantity}</div>
                <div>${dishItem.price}</div>
              </List.Item>
            )}
          />
          <Divider />
          <div style={styles.totalContainer}>
            <h2>Total: </h2>
            <h2 style={styles.totalPrice}>{order.total}</h2>
          </div>
          <Divider />
          {order.status === OrderStatus.NEW && (
            <div style={styles.buttonContainer}>
              <Button onClick={declineOrder} style={styles.button} type="ghost" size="large">
                Decline Order
              </Button>
              <Button onClick={acceptOrder} style={styles.button} type="primary" size="large">
                Accept Order
              </Button>
            </div>)}
            {order.status === OrderStatus.COOKING && (
              <Button onClick={readyForPickup} block type="primary" size="large">
                Food is Done
              </Button>)}
        </Card>
      </>
    )
}


export default DetailedOrder

const styles = {
    totalContainer: {
      flexDirection: "row",
      display: "flex",
      paddingLeft: 4
    },
    totalPrice: {
      marginLeft: "auto",
      fontWeight: "bold"
    },
    buttonContainer: {
      display: "flex",
      paddingBottom: 30,
      justifyContent: "center",
    },
    button: {
      marginRight: 20,
      marginLeft: 20
    }
  }