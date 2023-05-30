import { NextFunction, Request } from 'express';
import { get, startsWith } from 'lodash';
import api from '../../utils/api';
import { ServerResponse } from '../../common/response.middleware';

export default async function searchBreedsController(
  req: Request,
  res: ServerResponse,
  next: NextFunction,
): Promise<void> {
  // potential performance issue here, we can discuss solution in details
  const breeds = await api.get('/breeds');
  const searchTerm = get(req, `query['search-term']`);
  const data = get(breeds, 'data', []);
  // potential performance issue here, we can discuss solution in details
  const body = data.filter((breed) => {
    const name = get(breed, 'name');
    return startsWith(name, searchTerm as string);
  });
  res.body = body;
  next();
}
