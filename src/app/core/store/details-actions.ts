import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PlantDetailsInterface } from '../../shared/types/plantDetails.interface';

export const DetailsAction = createActionGroup({
  source: 'Plant Details',
  events: {
    'Get details': props<{ id: number }>(),
    'Get details success': props<{
      plantDetailsResponse: PlantDetailsInterface;
    }>(),
    'Get details failure': emptyProps(),
  },
});
