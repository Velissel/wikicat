import { Request, Response } from 'express';

function get(req: Request, res: Response): Response {
  return res.json({ message: 'popular' });
}

const PopularControllers = {
  get,
};

export default PopularControllers;
