import { render, screen } from '@testing-library/react';
import Admin from './Admin';

test('renders the Admin form and submit button', () => {
  render(<Admin />);
  
  // 1. Check if the heading shows up
  const heading = screen.getByText(/Admin Portal - Add a Milkshake/i);
  expect(heading).toBeInTheDocument();

  // 2. Check if the submit button exists
  const submitButton = screen.getByRole('button', { name: /Add Milkshake/i });
  expect(submitButton).toBeInTheDocument();
});