import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { DetailsAction } from '../../../../../core/store/details-actions';
import { combineLatest } from 'rxjs';
import {
  selectDetailsData,
  selectError,
  selectIsLoading,
} from '../../../../../core/store/details-reducers';
import { CommonModule } from '@angular/common';

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
export class DetailsComponent implements OnInit {
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

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = isNaN(this.id) ? 1 : this.id;
    this.store.dispatch(DetailsAction.getDetails({ id: this.id }));
  }
}
