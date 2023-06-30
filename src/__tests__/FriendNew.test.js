import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FriendNew from "../pages/FriendNew";



describe("<FriendIndex />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <FriendNew />
    </BrowserRouter>
  )})

  it("has name label", () => {
    expect(screen.getByText(/name/i)).toBeInTheDocument
  })

  it("has name field", () => {
    expect(screen.getByPlaceholderText(/add your name/i)
    ).toBeInTheDocument
  })

  it("has species label", () => {
    expect(screen.getByText(/species/i)).toBeInTheDocument
  })

  it("has species field", () => {
    expect(screen.getByPlaceholderText(/enter your species/i)
    ).toBeInTheDocument
  })

  it("has personality label", () => {  
    expect(screen.getByText(/personality/i)).toBeInTheDocument
  })

  it("has personality field", () => {
    expect(screen.getByPlaceholderText(/what is your personality?/i)
    ).toBeInTheDocument
  })
  it("has favorite activies label", () => {
    expect(screen.getByText(/favorite activies/i)).toBeInTheDocument
  })

  it("has favorite activies field", () => {
    expect(screen.getByPlaceholderText(/what do you like to do?/i)
    ).toBeInTheDocument
  })
  it("has size label", () => {
    expect(screen.getByText(/size/i)).toBeInTheDocument
  })

  it("has size field", () => {
    expect(screen.getByPlaceholderText(/what is your height in feet?/i)
    ).toBeInTheDocument
  })

  it("has diet label", () => {
    expect(screen.getByText(/diet/i)).toBeInTheDocument
  })

  it("has diet field", () => {
    expect(screen.getByPlaceholderText(/what nutrients do you like?/i)
    ).toBeInTheDocument
  })
  it("has age label", () => {
    expect(screen.getByText(/age/i)).toBeInTheDocument
  })

  it("has age field", () => {
    expect(screen.getByPlaceholderText(/How many rings?/i)
    ).toBeInTheDocument
  })
  it("has submit button", () => {
    expect(screen.getByRole('button', {
        name: /create profile/i
      })).toBeInTheDocument
  })

})

