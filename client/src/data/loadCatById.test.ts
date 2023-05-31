import api from '../utils/api';
import loadCatById from './loadCatById';

jest.mock('../utils/api');

describe('loadCatById', () => {
  it('should make request to correct endpoint', async () => {
    const id = 'id';
    await loadCatById(id);
    expect(api.get).toHaveBeenCalledWith(`/breeds/${id}`);
  });
});
