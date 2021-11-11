import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantApiDetailComponent } from './tenant-api-detail.component';

describe('TenantApiDetailComponent', () => {
  let component: TenantApiDetailComponent;
  let fixture: ComponentFixture<TenantApiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantApiDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantApiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
