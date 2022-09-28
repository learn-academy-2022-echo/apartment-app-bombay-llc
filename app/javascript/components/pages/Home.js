import React from "react"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <h3>Welcome to Apartment App</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div>
      <NavLink to="/apartmentindex">See All Apartments</NavLink>
      </div>
    </>
  )
}

export default Home
