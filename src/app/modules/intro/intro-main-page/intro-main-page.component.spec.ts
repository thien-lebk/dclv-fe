import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMainPageComponent } from './intro-main-page.component';

describe('IntroMainPageComponent', () => {
  let component: IntroMainPageComponent;
  let fixture: ComponentFixture<IntroMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IntroMainPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
