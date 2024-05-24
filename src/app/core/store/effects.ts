import { inject } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlantAction } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetPlantsResponseInterface } from '../../shared/types/GetPlantsResponse.interface';
import { PersistanceService } from '../services/persistance.service';
import { environment } from '../../../environments/environment.development';

export const getPlantsEffect = createEffect(
  (
    actions$ = inject(Actions),
    plantService = inject(PlantService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(PlantAction.getPlants),
      switchMap(({ url }) => {
        return plantService.getPlants(url).pipe(
          map((plantsResponse: GetPlantsResponseInterface) => {
            const currentState = persistanceService.get(
              environment.PlantsCurrentData_LocalStorage_Key
            );
            if (currentState !== null) {
              plantsResponse.results = [
                ...currentState.results,
                ...plantsResponse.results,
              ];
            }
            persistanceService.set(
              environment.PlantsCurrentData_LocalStorage_Key,
              plantsResponse
            );
            return PlantAction.getPlantsSuccess({ plantsResponse });
          }),
          catchError(() => {
            return of(PlantAction.getPlantsFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
