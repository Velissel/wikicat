import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CatSearchResults from './CatSearchResults';

describe('CatSearchResults component', () => {
  it('should show error', () => {
    const { container } = render(
      <MemoryRouter>
        <CatSearchResults
          cats={[]}
          loading={false}
          loaded={false}
          error="ERROR"
        />
      </MemoryRouter>,
    );

    expect(screen.getByText('ERROR')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should show loading', () => {
    const { container } = render(
      <MemoryRouter>
        <CatSearchResults cats={[]} loading={true} loaded={false} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should show prmot user to start search', () => {
    const { container } = render(
      <MemoryRouter>
        <CatSearchResults cats={[]} loading={false} loaded={false} />
      </MemoryRouter>,
    );

    expect(
      screen.getByText('Start search cat breeds by putting keyworkds in'),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should show no cats message', () => {
    const { container } = render(
      <MemoryRouter>
        <CatSearchResults cats={[]} loading={false} loaded={true} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Nothing is found')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should show cat list', () => {
    const cat = {
      id: 'id',
      image: 'url',
      name: 'name',
      description: 'description',
    };
    const { container } = render(
      <MemoryRouter>
        <CatSearchResults cats={[cat]} loading={false} loaded={true} />
      </MemoryRouter>,
    );

    expect(screen.getByTestId(`cat-card-${cat.id}`)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
