import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';
import { CardComponent } from '../../../../../shared/components/card/card.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { BackButtonComponent } from '../../../../../shared/components/back-button/back-button.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  const initialState = {
    plants: {
      isLoading: false,
      error: null,
      data: null,
      isNavigated: true,
    },
    details: {
      isLoading: false,
      error: null,
      data: {
        address: '04275 Devin Rapid',
        city: 'Lopezhaven',
        country: 'CN',
        default_language: 'kn',
        description:
          'Doloribus iusto neque distinctio modi saepe esse. Et aut fugiat.\nIpsa in exercitationem exercitationem perspiciatis. Dolorum numquam laborum. Blanditiis sit omnis similique atque eveniet.',
        division: 'Pet food',
        id: 8,
        manager: 'Michael Petersen',
        name: 'Jones Group',
        phone: '1 (920) 401-4302',
      },
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DetailsComponent,
        HeaderComponent,
        CardComponent,
        ButtonComponent,
        BackButtonComponent,
        CommonModule,
        RouterTestingModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Renders Address Card', () => {
    const address = fixture.debugElement.query(
      By.css('[data-testid="address-card"]')
    );
    expect(address.nativeElement.textContent).toContain('04275 Devin Rapid');
  });
});
