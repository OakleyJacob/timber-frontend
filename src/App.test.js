import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


describe("<App />", () => {
  beforeEach(() => {
    render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )})

  it("has header", () => {
      expect(screen.getByRole('link', {
        name: /home/i
      })).toBeInTheDocument
  })

  it("has footer", () => {
      expect(screen.getByRole('link', {
        name: /jc mingle © chris frey and jacob oakley 2023/i
      })).toBeInTheDocument
  })
 
  it("has link", () => {
    expect(screen.getByTestId('homeTest')).toBeInTheDocument
})
})



