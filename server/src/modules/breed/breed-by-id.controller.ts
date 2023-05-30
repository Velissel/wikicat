import { NextFunction, Request } from 'express';
import { get, isNil } from 'lodash';
import { ServerResponse } from '../../common/response.middleware';
import api from '../../utils/api';

export default async function breedByIdController(
  req: Request,
  res: ServerResponse,
  next: NextFunction,
): Promise<void> {
  const id = get(req, 'params.id');
  if (isNil(id)) {
    res.body = null;
    next();
    return;
  }

  const breed = await api.get(`/breeds/${id}`);
  const data = get(breed, 'data');
  if (isNil(data)) {
    res.body = null;
    next();
    return;
  }

  res.body = data;
  next();
}
