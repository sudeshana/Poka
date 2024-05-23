import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { GetPlantsResponseInterface } from '../../shared/types/GetPlantsResponse.interface';

export const PlantAction = createActionGroup({
  source: 'Plant',
  events: {
    'Get plants': props<{ url: string | undefined }>(),
    'Get plants success': props<{
      plantsResponse: GetPlantsResponseInterface;
    }>(),
    'Get plants failure': emptyProps(),
  },
});
