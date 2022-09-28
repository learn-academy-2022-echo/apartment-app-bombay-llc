import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'


const ApartmentIndex = ({apartments}) => {

    return (
    <div>
    <h1>All Apartments</h1>
    {apartments?.map((apartment, index) => {
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
          <Button>
            Visit Apartment
          </Button>
        </CardBody>
      </Card>
      )
      })
    }
    </div>
    )
}

export default ApartmentIndex