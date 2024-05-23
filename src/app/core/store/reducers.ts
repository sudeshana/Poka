import { createFeature, createReducer, on } from '@ngrx/store';
import { PlantsStateInterface } from '../../shared/types/PlantsState.interface';
import { PlantAction } from './actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: PlantsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
  isNavigated: false,
};

const plantsFeature = createFeature({
  name: 'plants',
  reducer: createReducer<PlantsStateInterface>(
    initialState,
    on(
      PlantAction.getPlants,
      (state): PlantsStateInterface => ({
        ...state,
        isLoading: true,
        isNavigated: false,
      })
    ),
    on(
      PlantAction.getPlantsSuccess,
      (state, action): PlantsStateInterface => ({
        ...state,
        isLoading: false,
        data: action.plantsResponse,
        isNavigated: false,
      })
    ),
    on(
      PlantAction.getPlantsFailure,
      (state): PlantsStateInterface => ({
        ...state,
        isLoading: false,
        isNavigated: false,
      })
    ),
    on(
      routerNavigationAction,
      (): PlantsStateInterface => ({ ...initialState, isNavigated: true })
    )
  ),
});

export const {
  name: plantFeatureKey,
  reducer: plantReducer,
  selectIsLoading,
  selectError,
  selectData: selectPlantsData,
} = plantsFeature;
