import breedByIdController from './breed-by-id.controller';
import BreedRoutes from './routes';

describe('breed routes', () => {
  it('should have root path', () => {
    expect(BreedRoutes.get).toHaveBeenCalledTimes(1);
    expect(BreedRoutes.get).toHaveBeenCalledWith('/:id', breedByIdController);
  });
});
