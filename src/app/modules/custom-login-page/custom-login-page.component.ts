import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {DOCUMENT} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-custom-login-page',
  templateUrl: './custom-login-page.component.html',
  styleUrls: ['./custom-login-page.component.scss']
})
export class CustomLoginPageComponent implements OnInit {

  constructor(public auth: AuthService,
              @Inject(DOCUMENT) public document: Document,
              private route: ActivatedRoute,
  ) {
  }

  orderby: string;

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.orderby = params.orderby;
          console.log(this.orderby); // price
        }
      );
  }

  redirectCallback(): void {
    window.location.href = 'http://localhost:3200/login/page?orderby=price&category=fiction';

      }
}
