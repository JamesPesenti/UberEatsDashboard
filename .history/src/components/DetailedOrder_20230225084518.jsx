import { Card, Descriptions, Divider, List, Button } from "antd"
import dishes from "../data/dishes.json"
import { useParams } from "react-router-dom"


const DetailedOrder = () => {

   const {id} = useParams()
   
    return (
        <>
        <Card title={'Order Title'} style={{ margin: 20, marginVertical: 50}}>
          <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
            <Descriptions.Item label="Customer">James Pesenti</Descriptions.Item>
            <Descriptions.Item label="Address">9 Oak Creek Dr</Descriptions.Item>
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
            <h2>Total:</h2>
            <h2 style={styles.totalPrice}>$22.32 </h2>
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