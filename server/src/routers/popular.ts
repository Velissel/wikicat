import { Router } from "express";
import PopularControllers from "../controllers/popular";


export default function PopularRoutes(): Router {
    const routes = Router();
    routes.get('/', PopularControllers.get);
    return routes;
};