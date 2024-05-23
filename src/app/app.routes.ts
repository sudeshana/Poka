import { Routes } from '@angular/router';
import { ListComponent } from './modules/plants/components/list/list.component';
import { DetailsComponent } from './modules/plants/components/list/details/details.component';

export const routes: Routes = [
  { path: 'plant', component: ListComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/plant', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/plant', pathMatch: 'full' }, // Wildcard route for a 404 page
];
