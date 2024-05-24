import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { DetailsAction } from '../../../../../core/store/details-actions';
import { combineLatest, first } from 'rxjs';
import {
  selectDetailsData,
  selectError,
  selectIsLoading,
} from '../../../../../core/store/details-reducers';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    ButtonComponent,
    BackButtonComponent,
    CommonModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit, AfterViewInit {
  @Input() title: string = 'Details';
  @Input() description: string = 'Description';

  backText = '< Back to all plants';
  parameter = this.route.snapshot.paramMap.get('id') ?? '';
  id = parseInt(this.parameter);

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    details: this.store.select(selectDetailsData),
  });

  title$ = this.store
    .select(selectDetailsData)
    .pipe(first(value => value !== null));

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.id = isNaN(this.id) ? 1 : this.id;
    this.store.dispatch(DetailsAction.getDetails({ id: this.id }));
  }

  ngAfterViewInit(): void {
    this.title$.subscribe(value => {
      this.titleService.setTitle(`Poka | ${value?.name}`);
    });
  }
}
