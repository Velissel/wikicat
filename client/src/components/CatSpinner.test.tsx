import React from 'react';
import { render, screen } from '@testing-library/react';
import CatSpinner from './CatSpinner';

describe('CatSpinner component', () => {
  it('should render loading text by default', () => {
    const { container } = render(<CatSpinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render custom text if label is supplied', () => {
    const { container } = render(<CatSpinner label="Custom" />);
    expect(screen.getByText('Custom')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
