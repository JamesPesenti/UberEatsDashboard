import { useState } from "react"
import { Form, Input, Card, Button } from "antd"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"


const Settings = () => {

  const [address, setAddress] = useState([])

  return (
    <>
      <Card title="Restaurant Details" style={{margin: 20}}>
        <Form layout="vertical" wrapperCol={{ span: 8 }}>
            <Form.Item label="Restaurant Name" required>
              <Input placeholder="Enter Restaurant Name"/>  
            </Form.Item>
            <Form.Item label="Restaurant Address" required>
                <GooglePlacesAutocomplete
                    apiKey="AIzaSyBZtJc8RiAQnnx6UmAZBogsAvbNqLGGxRI"
                />
            </Form.Item>
            <Form.Item >
              <Button type="primary">Submit</Button>  
            </Form.Item>
        </Form>
      </Card>
    </>
  )
}

export default Settings

