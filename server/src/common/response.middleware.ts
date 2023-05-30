import { NextFunction, Request, Response } from 'express';
import { isUndefined } from 'lodash';

export interface ServerResponse extends Response {
  body?: unknown;
}

export default function ResponseMiddleware(
  req: Request,
  res: ServerResponse,
  next: NextFunction,
): void {
  if (!isUndefined(res.body)) {
    res.json({
      error: null,
      data: res.body,
    });
    return;
  }
  return next();
}
