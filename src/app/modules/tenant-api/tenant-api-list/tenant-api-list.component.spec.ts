import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantApiListComponent } from './tenant-api-list.component';

describe('TenantApiListComponent', () => {
  let component: TenantApiListComponent;
  let fixture: ComponentFixture<TenantApiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TenantApiListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
