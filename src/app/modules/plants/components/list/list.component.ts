import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlantAction } from '../../../../core/store/actions';
import { PlantService } from '../../../../core/services/plant.service';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { PersistanceService } from '../../../../core/services/persistance.service';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { combineLatest } from 'rxjs';
import {
  selectError,
  selectIsLoading,
  selectPlantsData,
} from '../../../../core/store/reducers';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    CardComponent,
    ButtonComponent,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  url: string | undefined; //= '?offset=10';
  title = 'Plants';

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    plants: this.store.select(selectPlantsData),
  });

  constructor(
    private store: Store,
    private plantService: PlantService,
    private router: Router,
    private persistanceService: PersistanceService
  ) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        /* Your code goes here on every router change */
        console.log('routed');
        this.persistanceService.delete('PlantsCurrentData');
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(PlantAction.getPlants({ url: this.url }));
    /* this.plantService.getPlants(undefined).subscribe(
      data => {
        //use methods in our service
        console.log(data);
      },
      err => console.log(err)
    );*/
  }

  loadMore(url: string | null) {
    //this.url = '?offset=10';
    if (url === null) return;
    this.store.dispatch(PlantAction.getPlants({ url: url }));
  }
}
