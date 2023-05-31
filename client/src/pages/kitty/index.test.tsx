import React from 'react';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Kitty from '.';

jest.mock('../../data/loadCatById');
jest.mock('../../utils/api');

const TEST_DATA = {
  breed: {
    weight: {
      imperial: '5 - 10',
      metric: '2 - 5',
    },
    id: 'tang',
    name: 'Turkish Angora',
    cfa_url: 'http://cfa.org/Breeds/BreedsSthruT/TurkishAngora.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/turkish-angora',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/turkish-angora',
    temperament:
      'Affectionate, Agile, Clever, Gentle, Intelligent, Playful, Social',
    origin: 'Turkey',
    country_codes: 'TR',
    country_code: 'TR',
    description:
      'This is a smart and intelligent cat which bonds well with humans. With its affectionate and playful personality the Angora is a top choice for families. The Angora gets along great with other pets in the home, but it will make clear who is in charge, and who the house belongs to',
    life_span: '15 - 18',
    indoor: 0,
    alt_names: 'Ankara',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 5,
    grooming: 2,
    health_issues: 2,
    intelligence: 5,
    shedding_level: 2,
    social_needs: 5,
    stranger_friendly: 5,
    vocalisation: 3,
    experimental: 0,
    hairless: 0,
    natural: 1,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Turkish_Angora',
    hypoallergenic: 0,
    reference_image_id: '7CGV6WVXq',
  },
  images: [
    'https://cdn2.thecatapi.com/images/DYOqsRy9f.jpg',
    'https://cdn2.thecatapi.com/images/41Fe8q9vU.jpg',
    'https://cdn2.thecatapi.com/images/xTo8K7wb3.jpg',
    'https://cdn2.thecatapi.com/images/58mi0uCwO.jpg',
    'https://cdn2.thecatapi.com/images/cSzaNCgq2.jpg',
    'https://cdn2.thecatapi.com/images/KU_LUntSX.jpg',
    'https://cdn2.thecatapi.com/images/ZGoY_Ivly.jpg',
    'https://cdn2.thecatapi.com/images/Yx3nQTUHu.jpg',
    'https://cdn2.thecatapi.com/images/GlwgzUMan.jpg',
    'https://cdn2.thecatapi.com/images/7CGV6WVXq.jpg',
  ],
};

describe('Kitty page', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render', async () => {
    const testRouter = createMemoryRouter(
      [
        {
          path: '/',
          element: <Kitty />,
          loader: () => {
            return TEST_DATA;
          },
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
    // await waitFor(() =>screen.findByText('Other Photos'));
    await screen.findByText('Other Photos');

    expect(screen.getByTestId('kitty-photos')).toBeInTheDocument();
    expect(screen.getByTestId('kitty-details')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
