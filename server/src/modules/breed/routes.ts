import { Router } from 'express';
import breedByIdController from './breed-by-id.controller';

const BreedRoutes = Router();

BreedRoutes.get('/:id', breedByIdController);

export default BreedRoutes;
