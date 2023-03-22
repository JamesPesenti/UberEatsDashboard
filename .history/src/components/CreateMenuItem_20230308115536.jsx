import { Form, Input, Button, Card, InputNumber } from "antd"
import { DataStore } from "aws-amplify"
import { Dish } from "../models"
import { useRestaurantContext } from "./context/RestaurantContext"
import { useNavigation } from "@react-navigation/native"

const { TextArea } = Input 

const CreateMenuItem = () => {

    const { restaurant } = useRestaurantContext()
    const navigation = useNavigation()

    const onFinish = ({name, description, price}) => {
        DataStore.save(new Dish({
            name,
            description,
            price,
            restaurantID: restaurant.id,
        }))
        message.success("Dish was created")
        navigation.navigate.goBack()
    }

    const onFinishFailed = (errorInfo: any) => {

    }


  return (
    <>
        <Card title="New Menu Item" style={{margin: 20}}>
            <Form 
                layout="vertical" 
                wrapperCol={{ span: 8}}
                onFinish={onFinish}
                onFinishedFailed={onFinishFailed}
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
                <Form.Item 
                    label="Dish Description" 
                    name="description" 
                    rules={[{ required: true }]}
                    required
                >
                    <TextArea rows={4} placeholder="Enter dish description" />
                </Form.Item>
                <Form.Item 
                    label="Price" 
                    name="price" 
                    rules={[{ required: true }]}
                    required
                >
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