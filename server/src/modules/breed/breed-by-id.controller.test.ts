import api from '../../utils/api';
import breedByIdController, {
  BREED_ID_MISSING,
  BREED_NOT_FOUND,
} from './breed-by-id.controller';

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
    const breed = { id: 'BREED_1' };
    const images = [{ id: 'IMAGE_1', url: 'EXAMPLE_1' }];
    api.get
    // @ts-ignore
      .mockResolvedValue({ data: images })
      .mockResolvedValueOnce({ data: breed });
    await breedByIdController(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(res.body).toEqual({ breed, images: images.map((img) => img.url) });
  });

  it('should return id not supplied error when id is not supplied', async () => {
    req.params.id = undefined;
    const breed = { id: 'BREED_1' };
    const images = [{ id: 'IMAGE_1', url: 'EXAMPLE_1' }];
    api.get
    // @ts-ignore
      .mockResolvedValue({ data: images })
      .mockResolvedValueOnce({ data: breed });
    await breedByIdController(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(BREED_ID_MISSING);
  });

  it('should return not found error when api returns no result', async () => {
    const breed = undefined;
    const images = [{ id: 'IMAGE_1', url: 'EXAMPLE_1' }];
    api.get
    // @ts-ignore
      .mockResolvedValue({ data: images })
      .mockResolvedValueOnce({ data: breed });
    await breedByIdController(req, res, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(next).toHaveBeenCalledWith(BREED_NOT_FOUND);
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
