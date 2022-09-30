import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap'

const ProtectedApartmentShow = ({ apartments, current_user }) => {
  const { user_id } = useParams()
  const { id } = useParams()
  const filteredApartment = apartments?.find(apartment => apartment.user_id === +user_id && apartment.id === +id)
 
  return (
    <>
    <h1>Listing</h1>
      <div>
        <Card style={{width: '18rem'}}>
        <img alt="Unit" src={ filteredApartment.image } />
          <CardBody>
            <CardTitle tag="h5">
            Location:
            <div>{filteredApartment.street} {filteredApartment.city},</div>{filteredApartment.state}
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Price: ${filteredApartment.price}
              <br/>{filteredApartment.bedrooms} bedrooms
              <br/>{filteredApartment.bathrooms} bathrooms
            </CardSubtitle>
          
          </CardBody>
          <NavLink to="/protectedapartmentindex">
              <p>Back to My Index</p>
          </NavLink>
          <NavLink to="/apartmentedit">
              <p>Edit My Listing</p>
          </NavLink>
        </Card>
      </div>
    </>
    )
}

export default ProtectedApartmentShow
