import { Routes } from '@angular/router';
import { ListComponent } from './modules/plants/components/list/list.component';
import { DetailsComponent } from './modules/plants/components/list/details/details.component';
import { provideEffects } from '@ngrx/effects';
import * as DetailEffects from './core/store/details-effects';
import { provideState } from '@ngrx/store';
import {
  DetailsFeatureKey,
  DetailsReducer,
} from './core/store/details-reducers';

export const routes: Routes = [
  { path: 'plants', component: ListComponent },
  {
    path: 'plants/:id',
    component: DetailsComponent,
    providers: [
      provideEffects(DetailEffects),
      provideState(DetailsFeatureKey, DetailsReducer),
    ],
  },
  { path: '', redirectTo: '/plants', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/plants', pathMatch: 'full' }, // Wildcard route for a 404 page
];
