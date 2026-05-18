import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders the Home Page heading', () => {
  // 1. Render the component in our invisible test browser
  render(<Home />);
  
  // 2. Search the screen for the text "Home Page" (the /i means case-insensitive)
  const headingElement = screen.getByText(/Home Page/i);
  
  // 3. Assert that the element actually exists on the screen
  expect(headingElement).toBeInTheDocument();
});