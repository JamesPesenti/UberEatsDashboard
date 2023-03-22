import { useState } from "react"
import { Form, Input, Card, Button } from "antd"
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete"


const Settings = () => {

  const [name, setName] = useState([])
  const [address, setAddress] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  

  const getAddressLatLng = async (address) => {
    setAddress(address)
    const geocodedByAddress = await geocodeByAddress(address.label)
    const latLng = await getLatLng(geocodedByAddress[0]) 
    // setCoordinates(latLng)
    console.log(latLng)
  }
  return (
    <>
      <Card title="Restaurant Details" style={{margin: 20}}>
        <Form layout="vertical" wrapperCol={{ span: 8 }}>
            <Form.Item label="Restaurant Name" required>
              <Input value={name} onChange={(e) => console.log(e)}} placeholder="Enter Restaurant Name"/>  
            </Form.Item>
            <Form.Item label="Restaurant Address" required>
                <GooglePlacesAutocomplete
                    apiKey="AIzaSyBZtJc8RiAQnnx6UmAZBogsAvbNqLGGxRI"
                    selectedProps={{
                        value: address,
                        onChange: getAddressLatLng
                    }}
                />
            </Form.Item>
            <Form.Item >
              <Button type="primary">Submit</Button>  
            </Form.Item>
        </Form>
        <span>{coordinates?.lat} - {coordinates?.lng}</span>
      </Card>
    </>
  )
}

export default Settings

