import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '@app/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private cre$: CredentialsService, private router: Router) {}
  isAuthenticated(): boolean {
    return this.cre$.isAuthenticated();
  }
  ngOnInit() {
    if (this.cre$.isAuthenticated()) {
      this.router.navigateByUrl('client/list');
    }
  }
}
