import React from "react"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h3>Welcome to Apartment App</h3>
      <p>You will find well-appointed apartment homes available for rent based on your preferences. This application will also allow you to post your own listing. </p>
      <div>
      <NavLink to="/apartmentindex">See All Apartments</NavLink>
      </div>
    </>
  )
}

export default Home
