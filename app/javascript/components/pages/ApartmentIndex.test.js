import React from "react"
import { render, screen } from "@testing-library/react"
import ApartmentIndex from "./ApartmentIndex"
import userEvent from "@testing-library/user-event"



describe("<ApartmentIndex />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<ApartmentIndex/>, div)
    expect(screen.getByRole('heading', 'All Apartments')).toBeInTheDocument()
  })
})

