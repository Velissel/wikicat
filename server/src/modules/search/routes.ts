import { Router } from "express";
import searchBreedsController from "./search-breeds.controller";

const SearchRoutes = Router();

SearchRoutes.get('/', searchBreedsController);

export default SearchRoutes;