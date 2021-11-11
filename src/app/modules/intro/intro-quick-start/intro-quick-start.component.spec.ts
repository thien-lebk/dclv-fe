import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroQuickStartComponent } from './intro-quick-start.component';

describe('IntroQuickStartComponent', () => {
  let component: IntroQuickStartComponent;
  let fixture: ComponentFixture<IntroQuickStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroQuickStartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroQuickStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
