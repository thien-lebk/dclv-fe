import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialsService } from '@app/core';
import { ProfileService } from '@app/modules/profile/_services/profile.service';

@Component({
  selector: 'dc-navbar-left-nav',
  templateUrl: './navbar-left-nav.component.html',
  styleUrls: ['./navbar-left-nav.component.scss']
})
export class NavbarLeftNavComponent implements OnInit {
  currRoute: string;
  showCloseBtn = false;
  constructor(
    private router: Router,
    private cre$: CredentialsService,
    private profile$: ProfileService
  ) {}
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
  ngOnInit(): void {}
  actionOpenNav() {
    setTimeout(function() {
      this.showCloseBtn = true;
    }, 500);
    this.showCloseBtn = true;
  }
}
