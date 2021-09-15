import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationCreateComponent } from './user-application-create.component';

describe('UserApplicationCreateComponent', () => {
  let component: UserApplicationCreateComponent;
  let fixture: ComponentFixture<UserApplicationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplicationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplicationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
