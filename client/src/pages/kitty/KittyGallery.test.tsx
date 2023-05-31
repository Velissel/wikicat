import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import KittyGallery from './KittyGallery';

describe('KittyGallery component', () => {
  it('should render text when no photo is supplied', () => {
    const images = [];
    const { container } = render(
      <BrowserRouter>
        <KittyGallery images={images} />
      </BrowserRouter>,
    );

    expect(screen.getByText('No other photos')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render images when correct data is supplied', () => {
    const images = ['url_1', 'url_2'];
    const { container } = render(
      <BrowserRouter>
        <KittyGallery images={images} />
      </BrowserRouter>,
    );

    images.forEach((image, i) => {
      expect(screen.getByTestId(`img-${i}`)).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });
});
