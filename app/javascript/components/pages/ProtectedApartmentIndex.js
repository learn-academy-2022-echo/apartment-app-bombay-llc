import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'

const ProtectedApartmentIndex = ({apartments, current_user}) => {

const { id } = useParams()
const filteredApartments = apartments?.filter(apartment => apartment.user_id === current_user.id)
console.log(apartments);
return (
    <>
    <h1>My Apartments</h1>
      {filteredApartments?.map((apartment, index) => {
      return (
      <Card style={{width: '18rem'}} key={index}>
      <img alt="Unit Image" src={apartment.image}/>
        <CardBody>
          <CardTitle tag="h5">
          Location: <br/>{apartment.street} {apartment.city}, {apartment.state}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Price: ${apartment.price}
            <br/>{apartment.bedrooms} bedrooms
            <br/>{apartment.bathrooms} bathrooms
          </CardSubtitle>
          <NavLink to={`/protectedapartmentshow/${apartment.user_id}/${apartment.id}`}>
            <Button>
              Visit Apartment
            </Button>
          </NavLink>
        </CardBody>
      </Card>
      )
      })
    }
    </>
    )
}

export default ProtectedApartmentIndex