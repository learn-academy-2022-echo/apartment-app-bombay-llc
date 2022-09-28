import React from "react"
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <div>
      <NavLink to="/apartmentindex">See All Apartments</NavLink>
      </div>
    </>
  )
}

export default Home
