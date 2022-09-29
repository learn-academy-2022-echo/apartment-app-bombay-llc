import React, {useState} from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from 'react-router-dom'



const ApartmentNew = ( { createApartment }) => {
  const navigate = useNavigate()
  const [newApartment, setNewApartment] = useState({
    street:"", 
    city:"",
    state:"",
    manager: "",
    email: "", 
    price: "", 
    bedrooms:"" , 
    bathrooms:"" , 
    pets:"",
    image:"" 
  })

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value} 
      )
  }

  const handleSubmit = () => {
    createApartment(newApartment)
    navigate("/apartmentindex")
  }


  return (
    <>
      <h3>ApartmentNew</h3>
      <div>Create an Apartment Listing
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input type="text" street="street" placeholder='street' onChange={handleChange} value={newApartment.street} />
        </FormGroup>

        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" placeholder='city' onChange={handleChange} value={newApartment.city} />
        </FormGroup>

        <FormGroup>
          <Label for="state">State</Label>
          <Input type="text" name="state" placeholder='State'onChange={handleChange} value={newApartment.state} />
        </FormGroup>

        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input type="text" name="manager" placeholder='place url' onChange={handleChange} value={newApartment.manager} />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input type="text" name="email" placeholder='email'onChange={handleChange} value={newApartment.email} />
        </FormGroup>
        <FormGroup>
          <Label for="price">price</Label>
          <Input type="text" name="price" placeholder='price'onChange={handleChange} value={newApartment.price} />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">bedrooms</Label>
          <Input type="text" name="bedrooms" placeholder='bedrooms'onChange={handleChange} value={newApartment.bedrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">bathrooms</Label>
          <Input type="text" name="bathrooms" placeholder='bathrooms'onChange={handleChange} value={newApartment.bathrooms} />
        </FormGroup>
        <FormGroup>
          <Label for="pets">pets</Label>
          <Input type="text" name="pets" placeholder='pets'onChange={handleChange} value={newApartment.pets} />
        </FormGroup>
        <FormGroup>
          <Label for="image">image</Label>
          <Input type="text" name="image" placeholder='image'onChange={handleChange} value={newApartment.image} />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
           Create New Apartment
        </Button>
      </Form>
      </div>
    </>
  )
}

export default ApartmentNew
