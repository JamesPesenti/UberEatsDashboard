// Edit on plane


// import dishes from "../data/dishes.json"
import { Card, Descriptions, Divider, List, Button } from "antd"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { DataStore } from "aws-amplify"
import { Order } from "../models"


const DetailedOrder = () => {

   const {id} = useParams()


   const [order, setOrder] = useState(null)
   const [dishes, setDishes] = useState([])
   const [users, setUsers] = useState([])

   useEffect(() => {
      DataStore.query(Order, id).then(setOrder)
   }, [id])


    return (
        <>
        <Card title={`Order ${id}`} style={{ margin: 20, marginVertical: 50}}>
          <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
            <Descriptions.Item label="Customer">{users.name}</Descriptions.Item>
            <Descriptions.Item label="Address">{users.address}</Descriptions.Item>
          </Descriptions>
          <Divider />
          <List 
            dataSource={dishes} 
            renderItem={(dishItem) => (
              <List.Item>
                <div style={{fontWeight: "bold"}}>{dishItem.name} x{dishItem.quantity}</div>
                <div>${dishItem.price}</div>
              </List.Item>
            )}
          />
          <Divider />
          <div style={styles.totalContainer}>
            <h2>Total: </h2>
            <h2 style={styles.totalPrice}>{dishes.price}</h2>
          </div>
          <Divider />
          <div style={styles.buttonContainer}>
              <Button style={styles.button} type="ghost" size="large">
                Decline Order
              </Button>
              <Button style={styles.button} type="primary" size="large">
                Accept Order
              </Button>
          </div>
            <Button block type="primary" size="large">
              Food is Done
            </Button>
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