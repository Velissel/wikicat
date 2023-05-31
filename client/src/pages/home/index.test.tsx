import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './';

describe('home page', () => {
  it('should render', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByText('Catwiki Home')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
