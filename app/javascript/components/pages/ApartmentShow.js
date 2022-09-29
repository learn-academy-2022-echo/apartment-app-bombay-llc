import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

const ApartmentShow = ({ apartments }) => {
  const { id } = useParams()
  const apartment = apartments?.find(apt => apt.id === +id)

  return (
    <>
    <h1>Listing</h1>
      <div>
        <Card style={{width: '18rem'}}>
        <img alt="Unit" src={ apartment.image } />
          <CardBody>
            <CardTitle tag="h5">
            Location:
            <div>{apartment.street} {apartment.city},</div>{apartment.state}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Price: ${apartment.price}
              <br/>{apartment.bedrooms} bedrooms
              <br/>{apartment.bathrooms} bathrooms
            </CardSubtitle>
          
          </CardBody>
          <NavLink to="/apartmentindex">
            <Button>
              See All Listings
            </Button>
          </NavLink>
        </Card>
      </div>
    </>
    )
}

export default ApartmentShow
