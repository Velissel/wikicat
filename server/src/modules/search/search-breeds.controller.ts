import { NextFunction, Request } from "express";
import api from "../../utils/api";
import { ServerResponse } from "../../common/response.middleware";

export default async function searchBreedsController(req: Request, res: ServerResponse, next: NextFunction):Promise<void> {
    // potential performance issue here, we can discuss solution in details
    const breeds = await api.get('/breeds');
    const searchTerm = req.query['search-term'];
    // potential performance issue here, we can discuss solution in details
    const body = breeds.data.filter(breed => {
        return breed.name.startsWith(searchTerm);
    });
    res.body = body;
    next();
}