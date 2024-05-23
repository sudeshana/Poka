import { GetPlantsResponseInterface } from './GetPlantsResponse.interface';

export interface PlantsStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetPlantsResponseInterface | null;
  isNavigated: boolean;
}
