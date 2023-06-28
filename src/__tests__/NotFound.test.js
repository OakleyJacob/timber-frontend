import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';

describe("<NotFound />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )})

  it("has photo", () => {
      expect(screen.getByRole('img', {
        name: /card image cap/i
    })).toBeInTheDocument
  })  

  it("has page not found text", () => {
      expect(screen.getByRole('heading', {
        name: /.*/i
      })).toBeInTheDocument
  })  

  it("has you seem to be lost text", () => {
      expect(screen.getByText(/oh no! you seem to be lost\./i)).toBeInTheDocument
  })  

  it("has a link to follow home", () => {
      expect(screen.getByRole('link', {
        name: /.*/i
      })).toBeInTheDocument
  })  

})

