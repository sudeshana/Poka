import { createFeature, createReducer, on } from '@ngrx/store';
import { routerNavigationAction } from '@ngrx/router-store';
import { DetailsStateInterface } from '../../shared/types/DetailsState.interface';
import { DetailsAction } from './details-actions';

const initialState: DetailsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

const DetailsFeature = createFeature({
  name: 'details',
  reducer: createReducer<DetailsStateInterface>(
    initialState,
    on(
      DetailsAction.getDetails,
      (state): DetailsStateInterface => ({
        ...state,
        isLoading: true,
      })
    ),
    on(
      DetailsAction.getDetailsSuccess,
      (state, action): DetailsStateInterface => ({
        ...state,
        isLoading: false,
        data: action.plantDetailsResponse,
      })
    ),
    on(
      DetailsAction.getDetailsFailure,
      (state): DetailsStateInterface => ({
        ...state,
        isLoading: false,
      })
    ),
    on(routerNavigationAction, (): DetailsStateInterface => initialState)
  ),
});

export const {
  name: DetailsFeatureKey,
  reducer: DetailsReducer,
  selectIsLoading,
  selectError,
  selectData: selectDetailsData,
} = DetailsFeature;
