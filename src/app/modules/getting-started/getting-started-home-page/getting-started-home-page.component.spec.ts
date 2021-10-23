import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartedHomePageComponent } from './getting-started-home-page.component';

describe('GettingStartedHomePageComponent', () => {
  let component: GettingStartedHomePageComponent;
  let fixture: ComponentFixture<GettingStartedHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GettingStartedHomePageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
