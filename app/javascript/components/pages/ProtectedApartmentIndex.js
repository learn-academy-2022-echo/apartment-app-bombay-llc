import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { NavLink, useParams } from 'react-router-dom'

const ProtectedApartmentIndex = ({apartments}) => {

const { id } = useParams()
const apartment = apartments?.find(apartment => apartment.id === +id)

return (
    <>
        <Card style={{width: '18rem'}} >
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
    </>
    )
}

export default ProtectedApartmentIndex