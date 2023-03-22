import { Card, Descriptions, Divider, List, Button } from "antd"
import dishes from "../src/data/dishes.json"


function App() {
  return (
    <>
      <Card title={'Order Title'} style={{margin:20}}>
        <Descriptions>
          <Descriptions.item label="Customer">

          </Descriptions.item>
        </Descriptions>
      </Card>
    </>
  );
}

export default App;
