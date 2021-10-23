import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faUserPlus,
  faAddressCard,
  faEnvelope,
  faLock
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService, CredentialsService } from '@app/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'dc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    userPlus: faUserPlus,
    addressCard: faAddressCard,
    envelope: faEnvelope,
    lock: faLock
  };
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private auth$: AuthenticationService,
    private cre$: CredentialsService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.cre$.isAuthenticated()) {
      this.router.navigateByUrl('/');
    }
  }
}
