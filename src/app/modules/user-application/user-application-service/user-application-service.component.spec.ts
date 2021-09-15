import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationServiceComponent } from './user-application-service.component';

describe('UserApplicationServiceComponent', () => {
  let component: UserApplicationServiceComponent;
  let fixture: ComponentFixture<UserApplicationServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplicationServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplicationServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
