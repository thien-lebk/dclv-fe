import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApplicationLogComponent } from './user-application-log.component';

describe('UserApplicationLogComponent', () => {
  let component: UserApplicationLogComponent;
  let fixture: ComponentFixture<UserApplicationLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserApplicationLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApplicationLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
