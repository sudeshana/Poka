import { PlantDetailsInterface } from './plantDetails.interface';

export interface DetailsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: PlantDetailsInterface | null;
}
