import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService, CredentialsService } from '@app/core';
import { Router } from '@angular/router';
import { LoadingService } from '@app/shared/loader/_services/loading-services';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    lock: faLock,
    user: faUser
  };
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(
    private auth$: AuthenticationService,
    private cre$: CredentialsService,
    private router: Router,
    private loading$: LoadingService
  ) {}

  ngOnInit() {
    if (this.cre$.isAuthenticated()) {
      this.router.navigateByUrl('/');
    }
  }
  onSubmit(): void {
    this.loading$.startLoading();
    this.auth$.login(this.profileForm.value).subscribe(
      ele => {
        localStorage.setItem('refresh', ele.refresh);
        localStorage.setItem('access', ele.access);
        this.loading$.stopLoading();
        this.router.navigateByUrl('/');
      },
      error => {
        // console.log(error.error);
        // this.loading$.stopLoading();
        // tslint:disable-next-line:forin
        // for (const property in error.error) {
        //   this.alert$.error( property + ' ' +  error.error[property][0]);
        // }
      }
    );
  }
}
