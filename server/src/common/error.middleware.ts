import { NextFunction, Request, Response } from 'express';
import { get } from 'lodash';

export interface ServerResponse extends Response {
  body?: unknown;
}
export interface ServerError extends Error {
  statusCode?: number;
}

export default function ErrorMiddleware(
  err: ServerError,
  req: Request,
  res: ServerResponse,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  const statusCode = get(err, 'statusCode', 500);
  const message = get(err, 'message', 'Server Error');
  // should implement a layer for log collecting
  // console.error(err);
  res.status(statusCode);
  res.json({
    error: message,
    data: null,
  });
  next(err);
}
