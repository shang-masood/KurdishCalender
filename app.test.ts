import { render, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
describe('App component test', ()=>{
  test('renders "click to see the text"', async() => {

    render(<App />);
    test('clicks and shows the "rashame"', async()=>{
      render(<App />)
  
      const buttonElement = screen.getByRole('Link')
      fireEvent.click(buttonElement)
  
      const textElement = await screen.findByText('rashame',{}, {timeout: 1000})
      expect(textElement).toBeInTheDocument()
  
    })
  
    test('clicks and will not show "click to see the text"', async()=>{
      render(<App />)
  
      const buttonElement = screen.getByRole('button')
      fireEvent.click(buttonElement)
  
      await waitForElementToBeRemoved(() => screen.queryByText('click to see the text'))
  
  
    })
  
  })
  