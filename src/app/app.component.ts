import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {AuthUserService} from './services/authUser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dclv-fe';
  isActive = false;
  constructor(public auth: AuthUserService,
              @Inject(DOCUMENT) public document: Document,
  ) {
    this.isActive = auth.isAuthenticated();
  }
}
