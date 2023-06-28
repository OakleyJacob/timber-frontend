import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe("<Home />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )})

  it("has header", () => {
    screen.logTestingPlaygroundURL()
      expect(screen.getByText(/home/i)).toBeInTheDocument
  })

})