const axios = {
  default: jest.fn(),
};
jest.mock('axios', () => axios);
import './api';

describe('api', () => {
  afterEach(() => jest.resetAllMocks());

  it('created with correct config', () => {
    expect(axios.default).toHaveBeenCalledWith({
      baseURL: process.env.CAT_API,
      headers: {
        'x-api-key': process.env.CAT_API_KEY,
      },
    });
  });
});
