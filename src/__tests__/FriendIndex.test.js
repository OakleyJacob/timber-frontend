import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FriendIndex from "../pages/FriendIndex";
import MockFriends from '../MockFriends'



describe("<FriendIndex />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <FriendIndex friends={MockFriends}/>
    </BrowserRouter>
  )})

  it("has photo", () => {
    expect(screen.getByRole('img', {
      name: /photo of usersam/i
    })).toBeInTheDocument
  })

  it("has page title", () => {
    expect(screen.getByRole('heading', {
      name: /check out all our trees!/i
    })).toBeInTheDocument
  })

  it("has user name", () => {
    expect(screen.getByRole('heading', {
      name: /hi my name is Sam/i
    })).toBeInTheDocument
  })

  it("has user species", () => {
    expect(screen.getByRole('heading', {
      name: /i am a leopar/i
    })).toBeInTheDocument
  })

  it("has user personality", () => {
    expect(screen.getByText(/i am loud/i)).toBeInTheDocument
  })

  it("has user button", () => {
    expect(screen.getByRole('button', { name: /view sam's profile/i })).toBeInTheDocument
  })
})

