import { useState, useEffect } from "react"
import { Form, Input, Card, Button, message } from "antd"
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-google-places-autocomplete"

import { DataStore } from "aws-amplify"
import { Restaurant } from "../models"
import { useRestaurantContext } from "./context/RestaurantContext"

const Settings = () => {

  const [name, setName] = useState("")
  const [address, setAddress] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  
  const {sub, restaurant, setRestaurant } = useRestaurantContext()

  useEffect(() => {
     if (restaurant) {
        setName(restaurant.name)
        setCoordinates({lat: restaurant.lat, lng: restaurant.lng})
     }
  }, [restaurant]) 

  const getAddressLatLng = async (address) => {
    setAddress(address)
    const geocodedByAddress = await geocodeByAddress(address.label)
    const latLng = await getLatLng(geocodedByAddress[0]) 
      setCoordinates(latLng)
  }

  const onSubmit = async () => {
    if (!restaurant) {
      await createNewRestaurant()
    } else {
      await updateRestaurant()
    }
  }

  const createNewRestaurant = async () => {
    const newRestaurant = await DataStore.save(new Restaurant({
      name,
      image: "https://t4.ftcdn.net/jpg/00/90/13/11/240_F_90131119_vgHaYWBxCQHzqZzTUk5uPRP4cJeHLO47.jpg",
      deliveryFee: 0,
      minDelieveryTime: 15,
      maxDeliveryTime: 60,
      address: address.label,
      lat: coordinates.lat,
      lng: coordinates.lng,
      adminSub: sub,
    })
    )
    setRestaurant(newRestaurant)
    message.success("Restaurant Created")
  }

  const updateRestaurant = async () => {
    const updatedRestaurant = await DataStore.save(
      Restaurant.copyOf(restaurant, (updated) => {
        updated.name = name;
        if (address) {
          updated.address = address.label;
          updated.lat = coordinates.lat;
          updated.lng = coordinates.lng;
        }
      })
    )
    setRestaurant(updatedRestaurant)
    message.success("Restaurant updated")
  }

  return (
    <>
      <Card title="Restaurant Details" style={{margin: 20}}>
        <Form onFinish={onSubmit} layout="vertical" wrapperCol={{ span: 8 }}>
            <Form.Item label="Restaurant Name" required>
              <Input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter Restaurant Name"/>  
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
              <Button htmlType="submit" type="primary">Submit</Button>  
            </Form.Item>
        </Form>
        <span>{coordinates?.lat} - {coordinates?.lng}</span>
      </Card>
    </>
  )
}

export default Settings

