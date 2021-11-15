import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRoleSelectPermissionComponent } from './dialog-role-select-permission.component';

describe('DialogRoleSelectPermissionComponent', () => {
  let component: DialogRoleSelectPermissionComponent;
  let fixture: ComponentFixture<DialogRoleSelectPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRoleSelectPermissionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRoleSelectPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
