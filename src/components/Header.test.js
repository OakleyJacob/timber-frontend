import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe("<Header />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )})

  it("has home link", () => {
      expect(screen.getByRole('link', {
        name: /home/i
      })).toBeInTheDocument
  })

  it("has edit link", () => {
      expect(screen.getByRole('link', {
        name: /edit friends/i
      })).toBeInTheDocument
  })

  it("has search friends link", () => {
      expect(screen.getByRole('link', {
        name: /search friends/i
      })).toBeInTheDocument
  })

  it("has add friends link", () => {
      expect(screen.getByRole('link', {
        name: /add friends/i
      })).toBeInTheDocument
  })

  it("has all friends link", () => {
      expect(screen.getByRole('link', {
        name: /all friends/i
      })).toBeInTheDocument
  })

  it("has a class name on home", () => {
    const {container} = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      )
    const friendsLink = container.getElementsByClassName('homeTest')
    expect(friendsLink).toBeInTheDocument
  })


})