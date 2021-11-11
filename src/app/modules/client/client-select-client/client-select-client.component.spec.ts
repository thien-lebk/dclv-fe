import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectClientComponent } from './client-select-client.component';

describe('ClientSelectClientComponent', () => {
  let component: ClientSelectClientComponent;
  let fixture: ComponentFixture<ClientSelectClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientSelectClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSelectClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
