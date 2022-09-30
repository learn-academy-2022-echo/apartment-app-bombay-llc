import React from "react"
import { render, screen } from "@testing-library/react"
import ProtectedApartmentShow from "./ProtectedApartmentShow"
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'
import mockApartments from "../mockApartments"
import userEvent from "@testing-library/user-event"

const showProtectedPage = () => {
    render(
      <MemoryRouter initialEntries={["/protectedapartmentshow/1/1"]}>
        <Routes>
          <Route path='protectedapartmentshow/:user_id/:id' element={<ProtectedApartmentShow apartments={mockApartments} />} />
        </Routes>
      </MemoryRouter>
    )
  } 


describe("<ProtectedApartmentShow />", () => {
        it("has clickable links", () => {
        showProtectedPage()
    userEvent.click(screen.getByText("Back to My Index"))
    expect(screen.getByText("Back to My Index")).toBeInTheDocument()
    userEvent.click(screen.getByText("Edit My Listing"))
    expect(screen.getByText("Edit My Listing")).toBeInTheDocument()
  })
})