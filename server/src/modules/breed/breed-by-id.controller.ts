import { NextFunction, Request } from 'express';
import { get, isEmpty, isNil } from 'lodash';
import { ServerResponse } from '../../common/response.middleware';
import api from '../../utils/api';
import { ServerError } from '../../common/error.middleware';

export const BREED_ID_MISSING: ServerError = new Error('breed id is not supplied');
BREED_ID_MISSING.statusCode = 400;
export const BREED_NOT_FOUND: ServerError = new Error('breed not found');
BREED_NOT_FOUND.statusCode = 404;

export default async function breedByIdController(
  req: Request,
  res: ServerResponse,
  next: NextFunction,
): Promise<void> {
  const id = get(req, 'params.id');
  if (isNil(id)) {
    next(BREED_ID_MISSING);
    return;
  }

  const breed = await api.get(`/breeds/${id}`);
  const data = get(breed, 'data');
  if (isNil(data) || isEmpty(data)) {
    next(BREED_NOT_FOUND);
    return;
  }

  res.body = data;
  next();
}
