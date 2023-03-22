import { Form, Input, Card, Button } from "antd"

const Settings = () => {
  return (
    <>
      <Card title="Restaurant Details" style={{margin: 20}}>
        <Form layout="vertical" wrapperCol={{ span: 8 }}>
            <Form.Item label="Restaurant Name" required>
              <Input placeholder="Enter Restaurant Name"/>  
            </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default Settings

