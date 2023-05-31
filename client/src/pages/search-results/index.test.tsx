import React from 'react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import SearchResults from './';

jest.mock('../../utils/api');

describe('SearchResults page', () => {
  it('should render', () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <SearchResults />,
        },
      ],
      {
        initialEntries: ['/'],
        initialIndex: 0,
      },
    );
    const { container } = render(
      <RouterProvider router={testRouter}></RouterProvider>,
    );

    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(
      screen.getByText('Start search cat breeds by putting keyworkds in'),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
