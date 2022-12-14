import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const ApartmentIndex = ({apartments}) => {

    return (
    <div>
      
    <h1>All Apartments</h1>
    {apartments?.map((apartment, index) => {
      return (
        console.log(apartments),
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
          <NavLink to={`/apartmentshow/${apartment.id}`}>
            <Button>
              Visit Apartment
            </Button>
          </NavLink>
        </CardBody>
      </Card>
      )
      })
    }
    </div>
    )
}

export default ApartmentIndex