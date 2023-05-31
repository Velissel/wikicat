import React from 'react';
import { render, screen } from '@testing-library/react';
import CatCard from './CatCard';
import { MemoryRouter } from 'react-router-dom';

describe('CatCard component', () => {
  it('should render', async () => {
    const cat = {
      id: 'id',
      image: 'url',
      name: 'name',
      description: 'description',
    };
    const { container } = render(
      <MemoryRouter>
        <CatCard cat={cat} />
      </MemoryRouter>,
    );
    expect(screen.getByText(cat.name)).toBeInTheDocument();
    expect(screen.getByText(cat.description)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'View Breed Details' }),
    ).toHaveAttribute('href', `/kitty/${cat.id}`);
    expect(screen.getByTestId('cat-img')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
