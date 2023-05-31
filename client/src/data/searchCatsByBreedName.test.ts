import api from '../utils/api';
import searchCatsByBreedName from './searchCatsByBreedName';

jest.mock('../utils/api');

describe('searchCatsByBreedName', () => {
  beforeEach(() => {
    // @ts-ignore
    api.get.mockResolvedValue({});
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should make request to correct endpoint', async () => {
    const data = {
      error: null,
      data: [
        {
          id: 'id',
          image: { url: 'url' },
          name: 'name',
          description: 'description',
        },
      ],
    };
    // @ts-ignore
    api.get.mockResolvedValue({
      data,
    });

    const searchTerm = 'searchTerm';
    const result = await searchCatsByBreedName(searchTerm);
    expect(api.get).toHaveBeenCalledWith(`/search`, {
      params: {
        'search-term': searchTerm,
      },
    });
    expect(result).toEqual({
      error: null,
      data: [
        {
          description: 'description',
          id: 'id',
          image: 'url',
          name: 'name',
        },
      ],
    });
  });
});
