import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DetailsAction } from './details-actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { DetailsService } from '../services/details.service';
import { PlantDetailsInterface } from '../../shared/types/plantDetails.interface';

export const getPlantsEffect = createEffect(
  (actions$ = inject(Actions), detailsService = inject(DetailsService)) => {
    return actions$.pipe(
      ofType(DetailsAction.getDetails),
      switchMap(({ id }) => {
        return detailsService.getPlantDetails(id).pipe(
          map((plantDetailsResponse: PlantDetailsInterface) => {
            return DetailsAction.getDetailsSuccess({ plantDetailsResponse });
          }),
          catchError(() => {
            return of(DetailsAction.getDetailsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
