import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FriendIndex from "../pages/FriendIndex";



describe("<FriendIndex />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <FriendIndex />
    </BrowserRouter>
  )})

  it("has home link", () => {
    expect(screen.getByRole('link', {
      name: /home/i
    })).toBeInTheDocument
  })
})