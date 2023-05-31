import { get } from 'lodash';
import api from 'src/utils/api';
// @ts-ignore
import logo from '../logo.svg';

export interface CatData {
  id: string;
  image?: string;
  name: string;
  description: string;
}
export default async function searchCatsByBreedName(
  searchTerm: string,
): Promise<ServerResponse<CatData[]>> {
  const results = await api.get('/search', {
    params: {
      'search-term': searchTerm,
    },
  });
  const cat = get(results, 'data.data').map((result: any) => {
    return {
      id: result.id,
      image: get(result, 'image.url', logo),
      name: result.name,
      description: result.description,
    };
  });
  return {
    ...results.data,
    data: cat,
  };
}
