import { useState } from "react"
import { Form, Input, Card, Button } from "antd"
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete"


const Settings = () => {

  const [address, setAddress] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  
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
                    selectedProps={{
                        value: address,
                        onChange: setAddress
                    }}
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

