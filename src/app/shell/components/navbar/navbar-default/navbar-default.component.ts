import { Component, OnInit, Input } from '@angular/core';
import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService, CredentialsService } from '@app/core';

@Component({
  selector: 'dc-navbar-default',
  templateUrl: './navbar-default.component.html',
  styleUrls: ['./navbar-default.component.scss']
})
export class NavbarDefaultComponent implements OnInit {
  @Input()
  useOnlyDarkLogo: boolean;

  @Input()
  darkLinks: boolean;

  @Input()
  position: string;

  signInAlt = faSignInAlt;
  userPlus = faUserPlus;
  singOutAlt = faSignOutAlt;
  isAuthenticated = false;
  constructor(
    public cre$: CredentialsService,
    public auth$: AuthenticationService
  ) {}

  ngOnInit() {
    this.isAuthenticated = this.cre$.isAuthenticated();
  }

  isRightPositioned() {
    return this.position === 'right';
  }

  signOut() {
    localStorage.clear();
  }
}
