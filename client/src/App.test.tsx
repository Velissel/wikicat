import { render, screen } from '@testing-library/react';
import App from './App';
import * as React from 'react';

test('renders loading placeholder', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
