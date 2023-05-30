import api from '../../utils/api';
import searchBreedsController from './search-breeds.controller';

jest.mock('../../utils/api');

describe('search breeds controller', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let res: any, req: any, next: jest.Mock;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  beforeEach(() => {
    res = {};
    req = {
      query: { 'search-term': 'BREED_1' },
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should attach search results to response body', async () => {
    const data = [
      {
        name: 'BREED_1',
      },
      {
        name: 'BREED_2',
      },
    ];
    // @ts-ignore
    api.get.mockResolvedValue({ data });
    await searchBreedsController(req, res, next);
    expect(res.body).toEqual([data[0]]);
    expect(next).toHaveBeenCalledTimes(1);
    expect(api.get).toHaveBeenCalledTimes(1);
  });

  it('should return empty result if api returns nil value', async () => {
    // @ts-ignore
    api.get.mockResolvedValue({ data: undefined });
    // @ts-ignore
    await searchBreedsController(req, res, next);
    expect(res.body).toEqual([]);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should return empty result if search term is not supplied', async () => {
    req.query = {};
    const data = [
      {
        name: 'BREED_1',
      },
      {
        name: 'BREED_2',
      },
    ];
    // @ts-ignore
    api.get.mockResolvedValue({ data });
    await searchBreedsController(req, res, next);
    expect(res.body).toEqual([]);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it('should throw error when api fails', async () => {
    // @ts-ignore
    api.get.mockRejectedValue('no breeds');
    // @ts-ignore
    await expect(searchBreedsController(req, res, next)).rejects.toMatch(
      'no breeds',
    );
    expect(api.get).toHaveBeenCalledTimes(1);
  });
});
