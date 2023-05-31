import React from 'react';
import { act, render, screen } from '@testing-library/react';
import CatSearchInput from './CatSearchInput';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import api from '../utils/api';
import userEvent from '@testing-library/user-event';

jest.mock('../utils/api');

describe('CatSearchInput component', () => {
  beforeEach(() => {
    // @ts-ignore
    api.get.mockResolvedValue({});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render', () => {
    const { container } = render(
      <MemoryRouter>
        <CatSearchInput />
      </MemoryRouter>,
    );
    expect(screen.getByText('Search cat by breed')).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Search cat by breed' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should redirect user to search page when input is submitted', async () => {
    const searchTerm = 'Turkish';
    const { container } = render(
      <BrowserRouter>
        <CatSearchInput />
      </BrowserRouter>,
    );

    expect(window.location.pathname).toEqual('/');
    expect(container).toMatchSnapshot();
    await userEvent.type(
      screen.getByRole('textbox', { name: 'Search cat by breed' }),
      searchTerm,
    );
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Search' }));
    });
    expect(window.location.pathname).toEqual('/search-results');
    expect(
      screen.getByRole('textbox', { name: 'Search cat by breed' }),
    ).toHaveValue(searchTerm);
    expect(container).toMatchSnapshot();
  });
});
