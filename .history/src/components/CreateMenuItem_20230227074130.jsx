import { Form, Input, Button, Card, InputNumber} from "antd"

const { TextArea } = Input 
const CreateMenuItem = () => {
  return (
    <>
        <Card title="New Menu Item" style={{margin: 20}}>
            <Form>
                <Form.Item label="Dish Name" required>
                    <Input placeholder="Enter Dish name" />
                </Form.Item>
                <Form.Item label="Dish Description" required>
                    <TextArea rows={4} placeholder="Enter dish description" />
                </Form.Item>
                <Form.Item label="" required>
                    <Input placeholder="Enter restaurant name" />
                </Form.Item>
            </Form>
        </Card>
    </>
  )
}

export default CreateMenuItem
