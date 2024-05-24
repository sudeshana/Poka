import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackButtonComponent } from './back-button.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('BackButtonComponent', () => {
  let component: BackButtonComponent;
  let fixture: ComponentFixture<BackButtonComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BackButtonComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('Renders default state', () => {
    const buttonComponent = fixture.debugElement.query(
      By.css('[data-testid="back-button-link"]')
    );

    expect(buttonComponent.nativeElement.textContent).toContain('Back');
  });

  it('Renders custom state', () => {
    component.title = 'Back to all plants';
    fixture.detectChanges();

    const buttonComponent = fixture.debugElement.query(
      By.css('[data-testid="back-button-link"]')
    );
    expect(buttonComponent.nativeElement.textContent).toContain(
      'Back to all plants'
    );
  });
});
