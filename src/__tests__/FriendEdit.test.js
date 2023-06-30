import { render, screen } from "@testing-library/react";
import FriendEdit from "../pages/FriendEdit";
import MockFriends from '../MockFriends'
import { MemoryRouter, Routes, Route } from "react-router-dom";


describe("<FriendEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/friendedit/1"]}>
        <Routes>
          <Route path="/friendedit/:id" element={<FriendEdit friends={MockFriends} />}/>
        </Routes>
      </MemoryRouter>
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

  it("has img label", () => {  
    expect(screen.getByText(/upload your photo/i)).toBeInTheDocument
  })

  it("has img field", () => {
    expect(screen.getByPlaceholderText(/what is your image URL?/i)
    ).toBeInTheDocument
  })

  it("has personality label", () => {  
    expect(screen.getByText(/personality/i)).toBeInTheDocument
  })

  it("has personality field", () => {
    expect(screen.getByPlaceholderText(/what is your personality?/i)
    ).toBeInTheDocument
  })
  it("has favorite activities label", () => {
    expect(screen.getByText(/favorite activities/i)).toBeInTheDocument
  })

  it("has favorite activities field", () => {
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
 
  it("has edit button", () => {
    expect(screen.getByRole('button', {
        name: /edit profile/i
      })).toBeInTheDocument
  })

  it("has delete button", () => {
    expect(screen.getByRole('button', {
        name: /delete profile/i
      })).toBeInTheDocument
  })

})

