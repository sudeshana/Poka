import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('Renders default state', () => {
    const buttonComponent = fixture.debugElement.query(
      By.css('[data-testid="button"]')
    );

    expect(buttonComponent.nativeElement.textContent).toContain('Button');
  });

  it('Renders custom state', () => {
    component.text = 'Load More Results';
    fixture.detectChanges();

    const buttonComponent = fixture.debugElement.query(
      By.css('[data-testid="button"]')
    );
    expect(buttonComponent.nativeElement.textContent).toContain(
      'Load More Results'
    );
  });
});
