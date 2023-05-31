import { render, screen } from '@testing-library/react';
import AppError from './AppError';
import * as React from 'react';

test('renders error message is rendered', () => {
  render(<AppError />);
  const linkElement = screen.getByText(/An Error has occured/i);
  expect(linkElement).toBeInTheDocument();
});
