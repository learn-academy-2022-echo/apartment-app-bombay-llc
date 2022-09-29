import React from "react"
import {BrowserRouter} from "react-router-dom"
import { screen, render } from "@testing-library/react"
import ApartmentNew from "./ApartmentNew"
import mockApartments from '../mockApartments'




describe("<ApartmentNew />", () => {
  test("renders without crashing", () => {
    
    render(
      <BrowserRouter>
              <ApartmentNew mockApartments={mockApartments}/>
      </BrowserRouter>
  )
      expect(screen.getByText(/ApartmentNew/i)).toBeInTheDocument()

  })
})
