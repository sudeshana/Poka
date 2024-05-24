import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const initialState = {
    plants: {
      isLoading: false,
      error: null,
      data: {
        count: 50,
        next: '?offset=10',
        previous: null,
        results: [
          {
            address: '119 Webb View Apt. 563',
            country: 'VC',
            division: 'Aerospace',
            id: 1,
            name: 'Wallace-Patton',
          },
        ],
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListComponent,
        CommonModule,
        HeaderComponent,
        CardComponent,
        ButtonComponent,
        RouterTestingModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Renders Plants List', () => {
    const plants = fixture.debugElement.queryAll(
      By.css('[data-testid="card"]')
    );
    expect(plants.length).toEqual(1);
    expect(plants[0].nativeElement.textContent).toContain('Aerospace');
  });
});
