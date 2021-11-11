import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLeftNavComponent } from './navbar-left-nav.component';

describe('NavbarLeftNavComponent', () => {
  let component: NavbarLeftNavComponent;
  let fixture: ComponentFixture<NavbarLeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarLeftNavComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
