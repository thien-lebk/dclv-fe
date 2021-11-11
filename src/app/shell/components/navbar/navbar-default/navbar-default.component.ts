import { Component, OnInit, Input } from '@angular/core';
import {
  faSignInAlt,
  faSignOutAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService, CredentialsService } from '@app/core';
import { Router } from '@angular/router';
import { MenuClientDto } from '@app/shared/components/menu-client/menu-client.dto';
import { ProfilleDto } from '@app/modules/profile/_dto/profille.dto';
import { ProfileService } from '@app/modules/profile/_services/profile.service';

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
  client: string;
  // isAuthenticated = false;
  currClient: MenuClientDto = new MenuClientDto();
  profileUser: ProfilleDto;

  constructor(
    private cre$: CredentialsService,
    private auth$: AuthenticationService,
    private router: Router,
    private profile$: ProfileService
  ) {}

  ngOnInit() {
    this.client = localStorage.getItem('client');
    this.currClient.name = this.client;
    this.currClient.domains = [{ domain: this.client + '.kietteik.xyz' }];
    this.profile$.getDetailUser().subscribe(res => {
      this.profileUser = res;
    });
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
    this.router.navigateByUrl('home');
  }
}
