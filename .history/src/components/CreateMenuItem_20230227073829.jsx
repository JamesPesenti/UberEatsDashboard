import { Form, Input, Button, Card, InputNumber} from "antd"

const CreateMenuItem = () => {
  return (
    <>
        <Card title="New Menu Item" style={{margin: 20}}>
            <Form>
                <Form.Item label="Restaurant name" required>
                    <Input placeholder="Enter restaurant name" />
                </Form.Item>
            </Form>
        </Card>
    </>
  )
}

export default CreateMenuItem
