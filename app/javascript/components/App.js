import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// import apartments from './mockApartments'
import Footer from "./components/Footer"
import Header from "./components/Header"
import ApartmentEdit from "./pages/ApartmentEdit"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentShow from "./pages/ApartmentShow"
import ProtectedApartmentIndex from "./pages/ProtectedApartmentIndex"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App = (props) => {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    readApartments()
  }, [])

  const readApartments = () => {
    fetch("/apartments")
      .then((response) => response.json())
      .then((payload) => {
        setApartments(payload)
      })
      .catch((error) => console.log(error))
  }
  const createApartment = (apartment) =>{
    console.log(apartment)
  }
  
  return (
    <BrowserRouter>
      <Header {...props} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
        <Route path="/protectedapartmentindex" element={<ProtectedApartmentIndex apartments={apartments} {...props}/>} />
        <Route path="/apartmentshow" element={<ApartmentShow />} />
        <Route path="/apartmentnew" element={<ApartmentNew createApartment={createApartment}/>} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
