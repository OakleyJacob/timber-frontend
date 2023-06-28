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

  it("has logo", () => {
      expect(screen.getByRole('img', {
        name: /logo/i
      })).toBeInTheDocument
  })

  it("has footer text", () => {
    expect(screen.getByRole('link', {
      name: /logo jc mingle/i
    })).toBeInTheDocument
  })
})