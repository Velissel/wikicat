import api from '../../utils/api';
import breedByIdController from './breed-by-id.controller';

jest.mock('../../utils/api');

describe('breed by id controller', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let res: any, req: any, next: jest.Mock;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  beforeEach(() => {
    res = {};
    req = {
      params: { id: 'BREED_1' },
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should attach body to response', async () => {
    const data = {};
    // @ts-ignore
    api.get.mockResolvedValue({ data });
    await breedByIdController(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual(data);
  });

  it('should return empty result when id is not supplied', async () => {
    req.params.id = undefined;
    const data = {};
    // @ts-ignore
    api.get.mockResolvedValue({ data });
    await breedByIdController(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual(null);
  });

  it('should return empty result when api returns no result', async () => {
    const data = undefined;
    // @ts-ignore
    api.get.mockResolvedValue({ data });
    await breedByIdController(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual(null);
  });

  it('should throw error when api fails', async () => {
    // @ts-ignore
    api.get.mockRejectedValue('not found');
    // @ts-ignore
    await expect(breedByIdController(req, res, next)).rejects.toMatch(
      'not found',
    );
    expect(api.get).toHaveBeenCalledTimes(1);
  });
});
