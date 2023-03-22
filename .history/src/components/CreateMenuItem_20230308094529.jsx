import { Form, Input, Button, Card, InputNumber } from "antd"

const { TextArea } = Input 

const CreateMenuItem = () => {

    const onFinish = (values: any) => {
        console.log("Success:", values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo)
    }


  return (
    <>
        <Card title="New Menu Item" style={{margin: 20}}>
            <Form 
                layout="vertical" 
                wrapperCol={{ span: 8}}
                onFinish={onFinish}
                onFinishedFailed={onFinishedFailed}
            >
                <Form.Item 
                    label="Dish Name" 
                    name="name" 
                    placeholder="Enter Dish name"
                    rules={[{ required: true }]}
                    required
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Dish Description" name="description" required>
                    <TextArea rows={4} placeholder="Enter dish description" />
                </Form.Item>
                <Form.Item label="Price" name="price" required>
                    <InputNumber />
                </Form.Item>
                <Form.Item>
                    <Button 
                        htmlType="submit" 
                        type="primary"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    </>
  )
}

export default CreateMenuItem
