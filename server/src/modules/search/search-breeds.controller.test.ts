import api from "../../utils/api";
import searchBreedsController from "./search-breeds.controller";

jest.mock('../../utils/api');

describe('search breeds controller', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should attach search results to response body', async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res:any = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const req:any = {
            query: { 'search-term': 'BREED_1' }
        };
        const next = jest.fn();
        const data = [{
            name: 'BREED_1'
        }, {
            name: 'BREED_2'
        }];
        // @ts-ignore
        api.get.mockResolvedValue({ data });
        await searchBreedsController(req, res, next);
        expect(res.body).toEqual([data[0]]);
        expect(next).toHaveBeenCalledTimes(1);
        expect(api.get).toHaveBeenCalledTimes(1);
    });

    it('should throw error when api fails', async () => {
        // @ts-ignore
        api.get.mockRejectedValue('no breeds');
        // @ts-ignore
        await expect(searchBreedsController({}, {}, jest.fn())).rejects.toMatch('no breeds')
        expect(api.get).toHaveBeenCalledTimes(1);
    });
});