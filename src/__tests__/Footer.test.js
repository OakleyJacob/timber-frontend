import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

describe("<Footer />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )})



  it("has footer text", () => {
    expect(screen.getByRole('link', {
      name: /jc mingle © chris frey and jacob oakley 2023/i
    })).toBeInTheDocument
  })
})