import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsDetailComponent } from './apps-detail.component';

describe('AppsDetailComponent', () => {
  let component: AppsDetailComponent;
  let fixture: ComponentFixture<AppsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppsDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
