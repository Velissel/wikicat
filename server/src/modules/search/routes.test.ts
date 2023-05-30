import SearchRoutes from './routes';
import searchBreedsController from './search-breeds.controller';

describe('seach routes', () => {
  it('should have root path', () => {
    expect(SearchRoutes.get).toHaveBeenCalledTimes(1);
    expect(SearchRoutes.get).toHaveBeenCalledWith('/', searchBreedsController);
  });
});
