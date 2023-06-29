import { render, screen } from "@testing-library/react";
import FriendShow from "../pages/FriendShow";
import MockFriends from '../MockFriends'
import { MemoryRouter, Routes, Route } from "react-router-dom";




describe("<FriendShow />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/friendshow/1"]}>
        <Routes>
          <Route path="/friendshow/:id" element={<FriendShow friends={MockFriends} />}/>
        </Routes>
      </MemoryRouter>
    )})

  it("has photo", () => {
    expect(screen.getByRole('img', {
      name: /card image cap/i
    })).toBeInTheDocument
  })

  it("has user name", () => {
    expect(screen.getByRole('heading', {
      name: /sam/i
    })).toBeInTheDocument
  })

  it("has user attributes", () => {
    expect(screen.getByText(
      /species: leoparage: 3personality: louddiet: veggiesfavorite activities: running\.size class: small/i
      )).toBeInTheDocument
  })

})

