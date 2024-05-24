import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PlantAction } from '../../../../core/store/actions';
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
import { Title } from '@angular/platform-browser';

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
export class ListComponent implements OnInit, AfterViewInit {
  url: string | undefined;
  title = 'Plants';

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    plants: this.store.select(selectPlantsData),
  });

  constructor(
    private store: Store,
    private titleService: Title,
    private router: Router,
    private persistanceService: PersistanceService
  ) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.persistanceService.delete('PlantsCurrentData');
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(PlantAction.getPlants({ url: this.url }));
  }

  ngAfterViewInit(): void {
    this.titleService.setTitle(`Poka`);
  }

  loadMore(url: string | null) {
    if (url === null) return;
    this.store.dispatch(PlantAction.getPlants({ url: url }));
  }
}
