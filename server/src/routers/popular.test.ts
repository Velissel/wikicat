import PopularController from '../controllers/popular';
import PopularRoute from './popular';

jest.mock('express', () => ({
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  Router: () => ({
    get: jest.fn(),
  }),
}));

describe('route - popular', () => {
  let routes;

  beforeEach(() => {
    routes = PopularRoute();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('has root route', () => {
    expect(routes.get).toHaveBeenCalledWith('/', PopularController.get);
  });
});
