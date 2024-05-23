import { inject } from '@angular/core';
import { PlantService } from '../services/plant.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PlantAction } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetPlantsResponseInterface } from '../../shared/types/GetPlantsResponse.interface';
import { PersistanceService } from '../services/persistance.service';

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
            //persistanceService.set('PlantsCurrentData', plantsResponse);
            const currentState = persistanceService.get('PlantsCurrentData');
            if (currentState !== null) {
              /*console.log(currentState.previous);
              console.log(currentState.next);
              console.log(currentState.results);*/
              /*const newState: GetPlantsResponseInterface = {
                count: plantsResponse.count,
                next: plantsResponse.next,
                previous: plantsResponse.previous,
                results: plantsResponse.results
              }*/
              plantsResponse.results = [
                ...currentState.results,
                ...plantsResponse.results,
              ];
              persistanceService.set('PlantsCurrentData', plantsResponse);
              return PlantAction.getPlantsSuccess({ plantsResponse });
            } else {
              persistanceService.set('PlantsCurrentData', plantsResponse);
              return PlantAction.getPlantsSuccess({ plantsResponse });
            }

            //persistanceService.set('PlantsCurrentData', newState);
            //return PlantAction.getPlantsSuccess({ newState });
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
