import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRoleSelectClientComponent } from './dialog-role-select-client.component';

describe('DialogRoleSelectClientComponent', () => {
  let component: DialogRoleSelectClientComponent;
  let fixture: ComponentFixture<DialogRoleSelectClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRoleSelectClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRoleSelectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
