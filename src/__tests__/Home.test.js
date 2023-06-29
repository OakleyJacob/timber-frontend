import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MockFriends from '../MockFriends'
import Home from '../pages/Home';

describe("<Home />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Home friends={MockFriends}/>
    </BrowserRouter>
  )})

  it("has header", () => {
      expect(screen.getByRole('heading', {
        name: /welcome to timber!/i
      })).toBeInTheDocument
  })

})