import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationDetailComponent } from './user-application-detail.component';

describe('UserApplicationDetailComponent', () => {
  let component: UserApplicationDetailComponent;
  let fixture: ComponentFixture<UserApplicationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplicationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
