import { Card, Descriptions, Divider, List, Button } from "antd"
import dishes from "../src/data/dishes.json"


function App() {
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
        <div>
          <h2>Total: </h2>
          <h2>$22 </h2>
        </div>
      </Card>
    </>
  );
}

export default App;
