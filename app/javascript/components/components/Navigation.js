import React from "react"
import { Nav, NavItem, Button} from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route
}) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink to="/" className="nav-link">
            <Button>Home</Button>
          </NavLink>
        </NavItem>
        {logged_in && (
          <NavItem>
            <a href={sign_out_route} className="nav-link">
              <Button>Sign Out</Button>
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={sign_in_route} className="nav-link">
              <Button>Sign In</Button>
            </a>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <a href={new_user_route} className="nav-link">
            <Button>Sign Up</Button>
            </a>
          </NavItem>
        )}
        {logged_in && (
          <NavItem>
            <NavLink to="/protectedapartmentindex" className="nav-link" >
              My Apartments
            </NavLink>
            <NavLink to="/apartmentshow" className="nav-link">
            <Button>My Apartments</Button>
            </NavLink>
          </NavItem>
        )}
        {logged_in && (
          <NavItem>
            <NavLink to="/apartmentnew" className="nav-link">
            <Button>Add Property</Button>
            </NavLink>
          </NavItem>
        )}
        {logged_in && (
          <NavItem>
            <NavLink to="/apartmentindex" className="nav-link">
            <Button>All listings</Button>
            </NavLink>
          </NavItem>
        )}
        {!logged_in && (
          <NavItem>
            <NavLink to="/apartmentindex" className="nav-link">
            <Button>All Listings</Button>
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </>
  )
}

export default Navigation
