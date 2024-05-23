import { PlantInterface } from './plant.interface';

export interface GetPlantsResponseInterface {
  count: number;
  next: string;
  previous: string | null;
  results: PlantInterface[];
}
