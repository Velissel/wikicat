const axios = {
  create: jest.fn(),
};
jest.mock('axios', () => axios);
import './api';

describe('api', () => {
  afterEach(() => jest.resetAllMocks());

  it('created with correct config', () => {
    expect(axios.create).toHaveBeenCalledWith({
      baseURL: process.env.CAT_API,
      headers: {
        'x-api-key': process.env.CAT_API_KEY,
      },
    });
    expect(axios.create).toHaveBeenCalledTimes(1);
  });
});
