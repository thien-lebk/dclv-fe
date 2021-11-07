import { Component, OnInit, Input } from '@angular/core';
import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService, CredentialsService } from '@app/core';
import { Router } from '@angular/router';

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
  // isAuthenticated = false;
  constructor(
    public cre$: CredentialsService,
    public auth$: AuthenticationService,
    public router: Router
  ) {}
  client: string;
  ngOnInit() {
    this.client = localStorage.getItem('client');
  }
  isAuthenticated(): boolean {
    return this.cre$.isAuthenticated();
  }
  isSelectClient(): boolean {
    const token = localStorage.getItem('client');
    if (!token) {
      return false;
    }
    return true;
  }
  isRightPositioned() {
    return this.position === 'right';
  }

  signOut() {
    localStorage.clear();
    // this.router.navigateByUrl('auth/login')
    window.location.reload();
  }
}
