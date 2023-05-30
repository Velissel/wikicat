import ErrorMiddleware from './error.middleware';

describe('error handler middleware', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let res: any, req: any, err;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  beforeEach(() => {
    res = {
      status: jest.fn(),
      json: jest.fn(),
    };
    req = {};
    err = new Error('TEST_ERROR');
    err.statusCode = 400;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should send default error when error params are not set', () => {
    err.statusCode = undefined;
    err.message = undefined;
    ErrorMiddleware(err, req, res, jest.fn());
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Server Error',
      data: null,
    });
  });

  it('should send custom error when error params are set', () => {
    ErrorMiddleware(err, req, res, jest.fn());
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: err.message,
      data: null,
    });
  });
});
