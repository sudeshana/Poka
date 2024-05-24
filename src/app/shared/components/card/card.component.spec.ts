import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('ErrorMessageComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('renders default structure', () => {
    const cardDiv = fixture.debugElement.query(
      By.css('[data-testid="card-div"]')
    );

    expect(cardDiv).toBeTruthy();
  });
});
