import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoginPageComponent } from './custom-login-page.component';

describe('CustomLoginPageComponent', () => {
  let component: CustomLoginPageComponent;
  let fixture: ComponentFixture<CustomLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLoginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
