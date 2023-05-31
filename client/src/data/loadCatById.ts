import { get } from 'lodash';
import api from 'src/utils/api';

export interface CatDetailData {
  breed: {
    name: string;
    description: string;
    temperament: string;
    origin: string;
    life_span: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    grooming: number;
    intelligence: number;
    health_issues: number;
    social_needs: number;
    stranger_friendly: number;
  };
  images: string[];
}
export default async function loadCatById(
  id: string,
): Promise<ServerResponse<CatDetailData>> {
  const res = await api.get<ServerResponse<CatDetailData>>(`/breeds/${id}`);
  const data = get(res, 'data');
  return data;
}
