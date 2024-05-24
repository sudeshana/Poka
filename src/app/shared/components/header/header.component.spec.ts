import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('Renders default state', () => {
    const HeaderComponent = fixture.debugElement.query(
      By.css('[data-testid="title"]')
    );

    expect(HeaderComponent.nativeElement.textContent).toEqual(' header ');
  });

  it('Renders custom state', () => {
    component.description = 'Testing custom description';
    fixture.detectChanges();

    const HeaderComponent = fixture.debugElement.query(
      By.css('[data-testid="description"]')
    );
    expect(HeaderComponent.nativeElement.textContent).toEqual(
      ' Testing custom description '
    );
  });
});
