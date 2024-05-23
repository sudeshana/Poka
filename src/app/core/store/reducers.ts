import { createFeature, createReducer, on } from '@ngrx/store';
import { PlantsStateInterface } from '../../shared/types/PlantsState.interface';
import { PlantAction } from './actions';
//import { routerNavigationAction } from '@ngrx/router-store';

const initialState: PlantsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const plantsFeature = createFeature({
  name: 'plants',
  reducer: createReducer<PlantsStateInterface>(
    initialState,
    on(
      PlantAction.getPlants,
      (state): PlantsStateInterface => ({ ...state, isLoading: true })
    ),
    on(
      PlantAction.getPlantsSuccess,
      (state, action): PlantsStateInterface => ({
        ...state,
        isLoading: false,
        data: action.plantsResponse,
      })
    ),
    on(
      PlantAction.getPlants,
      (state): PlantsStateInterface => ({ ...state, isLoading: false })
    )
    // on(routerNavigationAction, (): PlantsStateInterface => initialState)
  ),
});

export const {
  name: plantFeatureKey,
  reducer: plantReducer,
  selectIsLoading,
  selectError,
  selectData: selectPlantsData,
} = plantsFeature;
