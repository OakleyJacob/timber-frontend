import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe("<NotFound />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )})

  it("has photo", () => {
    screen.logTestingPlaygroundURL()
      expect(screen.getByRole('img', {
        name: /card image cap/i
    })).toBeInTheDocument
  })  

  it("has page not found text", () => {
    screen.logTestingPlaygroundURL()
      expect(screen.getByRole('heading', {
        name: /.*/i
      })).toBeInTheDocument
  })  

  it("has you seem to be lost text", () => {
    screen.logTestingPlaygroundURL()
      expect(screen.getByText(/oh no! you seem to be lost\./i)).toBeInTheDocument
  })  

  it("has a link to follow home", () => {
    screen.logTestingPlaygroundURL()
      expect(screen.getByRole('link', {
        name: /.*/i
      })).toBeInTheDocument
  })  

})

