import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import KittyDetails from './KittyDetails';

describe('KittyDetails component', () => {
  it('should render', () => {
    const cat = {
      temperament: 'temp',
      origin: 'ori',
      lifeSpan: 'life',
      adaptability: 1,
      affectionLevel: 2,
      childFriendly: 3,
      grooming: 4,
      intelligence: 5,
      healthIssues: 6,
      socialNeeds: 7,
      strangerFriendly: 8,
    };
    const { container } = render(
      <BrowserRouter>
        <KittyDetails {...cat} />
      </BrowserRouter>,
    );

    Object.keys(cat).forEach((key) => {
      const value = cat[key];
      expect(
        screen.getByText(key === 'lifeSpan' ? 'life span' : key),
      ).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });
});
