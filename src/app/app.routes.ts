import { Routes } from '@angular/router';
import { ListComponent } from './modules/plants/components/list/list.component';
import { DetailComponent } from './modules/plants/components/detail/detail.component';

export const routes: Routes = [
  { path: 'plant', component: ListComponent },
  { path: 'plant2', component: DetailComponent },
  { path: '', redirectTo: '/plant', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', redirectTo: '/plant', pathMatch: 'full' }, // Wildcard route for a 404 page
];
