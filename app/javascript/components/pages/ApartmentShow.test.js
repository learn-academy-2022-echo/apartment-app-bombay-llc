import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentShow from "./ApartmentShow"
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import mockApartments from "../mockApartments"

const showAptPage = () => {
  render(
    <MemoryRouter initialEntries={["/apartmentshow/1"]}>
      <Routes>
        <Route path='apartmentshow/:id' element={<ApartmentShow apartments={mockApartments} />} />
      </Routes>
    </MemoryRouter>
  )
} 

describe("<ApartmentShow />", () => {
  it("renders without crashing", () => {
    showAptPage()
    expect(screen.getByText('See All Listings')).toBeInTheDocument()
  })
})